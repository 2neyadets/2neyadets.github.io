import { LocalStorage } from 'quasar'
import jwtDecode from 'jwt-decode'
import api from 'src/api'
import { currentPeriod } from 'src/utils/mappers'
import { getShortDate } from 'src/utils/helpers'

const user = LocalStorage.getItem('user-data') || null
let token = LocalStorage.getItem('user-token') || null
const jwt = token ? jwtDecode(token) : { exp: 0 }
const expired = jwt.exp < Math.round(Date.now() / 1000)
if (expired) {
  LocalStorage.remove('user-token-super')
  LocalStorage.remove('user-token')
  token = null
}

export const initialProfile = () => ({
  id: (user && user.id) || null,
  userId: (user && user.id) || null,
  operatorId: (user && user.operatorId) || null,
  firstName: (user && user.firstName) || null,
  middleName: (user && user.middleName) || null,
  lastName: (user && user.lastName) || null,
  departmentName: (user && user.departmentName) || null,
  roles: (user && user.roles) || [],
})

export default {
  name: 'UserController',
  data () {
    return {
      pooling: null,
      updated: null,
      loading: {
        user: false,
        ratings: false,
        groups: false
      },
      ratings: null,
      currentGroup: null,
      token,
      expired,
      profile: initialProfile(),
      allEmployees: [],
      groups: null
    }
  },
  computed: {
    rights () {
      return {
        payments: this.isUserHaveRoles(['operatorHard', 'operatorSoft']),
      }
    },
    currentGroupData () {
      return this.currentGroup && this.ratings && this.ratings.groups ? this.ratings.groups.find(i => i.id === this.currentGroup.value) : null
    },
    userRatings () {
      const list = this.ratings
      const values = list && list.find(item => item.id === this.profile.userId)
      if (!values) return
      const { indicators } = values
      return indicators && {
        takings: indicators.takings[currentPeriod()].rating,
        premium: indicators.takings[currentPeriod()].premium,
        received: indicators.received[currentPeriod()].rating,
        fulfilled: indicators.fulfilled[currentPeriod()].rating,
        renewals: indicators.renewals[currentPeriod()].rating,
        quality: 'NaN'
      }
    },

    isUserSupervisor () {
      return this.isUserHaveRoles([
        'supervisorHard',
        'supervisorSoft',
        'supervisorCallCenter',
        'supervisorUnderwriting',
        'leaderHard',
        'leaderSoft',
        'leaderCallCenter',
        'leaderUnderwriting'
      ])
    },
    permissionsObj () {
      return {
        isHard: this.isUserHaveRoles(['operatorHard', 'supervisorHard', 'leaderHard']),
        isSoft: this.isUserHaveRoles(['operatorSoft', 'supervisorSoft', 'leaderSoft']),
        isCall: this.isUserHaveRoles(['operatorCallCenter', 'supervisorCallCenter', 'leaderCallCenter']),
        isUnder: this.isUserHaveRoles(['operatorUnderwriting', 'supervisorUnderwriting', 'leaderUnderwriting']),
        isSuper: this.isUserSupervisor
      }
    },
    shortName () {
      return this.profile.lastName + ' ' + this.profile.firstName
    },
    fullName () {
      return this.profile.firstName + ' ' + this.profile.middleName + ' ' + this.profile.lastName
    },
    fullNameByLastName () {
      return `${this.profile.lastName ? this.profile.lastName : ''}${this.profile.firstName ? ' ' + this.profile.firstName : ''}${this.profile.middleName ? ' ' + this.profile.middleName : ''}`
    },
    department () {
      return this.profile.departmentName
    },
    operatorIsOwnerLastPromise () {
      const lastPromise = this.$operatorWB.loans.lastPromise
      return lastPromise && lastPromise.operator && lastPromise.operator.id && (lastPromise.operator.id === this.profile.userId)
    },
    operatorCanAddPromise () {
      const {
        lastPromise,
        lastRenewal,
        lastPromiseNotExpired,
        lastPromiseExpiredToday,
        lastRenewalNotExpired
      } = this.$operatorWB.loans
      if (!lastPromise && !lastRenewal) {
        return true
      }
      if (lastRenewalNotExpired) {
        return false
      }
      if (lastPromiseNotExpired) {
        if (this.operatorIsOwnerLastPromise && lastPromiseExpiredToday) {
          return true
        }
      } else {
        return true
      }
      return false
    },
    allEmployeesUnder () {
      return this.filterEmployees(['operatorUnderwriting', 'supervisorUnderwriting', 'leaderUnderwriting']) || []
    },
  },
  methods: {
    set (e, v) {
      this[e] = v
    },
    logout () {
      LocalStorage.remove('user-token-super')
      LocalStorage.remove('user-token')
      LocalStorage.remove('user-data-super')
      LocalStorage.remove('user-data')
      this.token = null
      this.expired = null
      this.ratings = null
      this.profile = {
        id: null,
        userId: null,
        operatorId: null,
        firstName: null,
        middleName: null,
        lastName: null,
        departmentName: null,
        roles: [],
      }
      this.$operatorWB.layout.changeRoute('/login')
    },
    operatorCanEditCommunication (cid) {
      const communication = this.$operatorWB.clients.currentCommunications
        .find(item => {
          return item.id === cid &&
            item.operator.id === this.profile.userId &&
            getShortDate(item.contactedAt) === getShortDate(new Date())
        })
      return !!communication
    },
    loadRatings () {
      if (!this.isUserSupervisor) {
        this.getRatings()
        this.pooling = this.pooling === null && setInterval(() => this.getRatings(), 600 * 1000)
      }
    },
    async getRatings () {
      if (this.token && (this.isUserHaveRoles(['operatorHard', 'operatorSoft']))) {
        this.loading.ratings = true
        setTimeout(async () => {
          let res
          if (this.isUserHaveRoles('operatorSoft')) res = await api.crm.userRatings()
          if (this.isUserHaveRoles('operatorHard')) res = await api.crm.userRatingsHard()
          this.loading.ratings = false
          this.updated = Date.now()
          this.ratings = res.data
          this.isUserHaveRoles('operatorHard') && this.ratings.employee && this.ratings.employee.groups && this.set('currentGroup', {
            label: this.ratings.employee.groups[0].name,
            value: this.ratings.employee.groups[0].id
          })
        }, 2000)
      }
    },
    async login (data) {
      this.loading.user = true
      setTimeout(async () => {
        const res = await api.crm.userLogin(data)
        this.loading.user = false
        if (res.errors) {
          return false
        }
        const token = res.data.token
        const jwt = token && jwtDecode(token)
        if (token && jwt) {
          this.token = token
          this.expired = false
          this.profile = Object.assign({}, jwt.Data, res.data.profile)
          this.profile.userId = this.profile.id
          LocalStorage.set('user-token', token)
          LocalStorage.set('user-data', this.profile)
          this.$operatorWB.layout.changeRoute('/')
          return true
        }
        return false
      }, 250)
    },
    isUserHaveRoles (roles = []) {
      if (!this.profile.roles) return false
      if (typeof roles === 'string') roles = [roles]
      return roles.some(role => {
        return this.profile.roles.includes(role)
      })
    },
    filterEmployees (arrOfRoles) {
      return this.allEmployees.filter(employee => arrOfRoles.some(role => employee.roles.includes(role)))
    },
    loadsAfterAuthorization () {
      if (this.isUserHaveRoles(['operatorHard', 'operatorSoft'])) this.loadRatings()
    }
  },
  watch: {
    token (v) {
      if (v) {
        this.$operatorWB.communication.updateCommunicationScheme()
        if (this.pooling) {
          clearInterval(this.pooling)
          this.pooling = null
        }
        this.loadsAfterAuthorization()
      } else {
        this.$operatorWB.communication.scheme = null
      }
    },
  },
  beforeDestroy () {
    clearInterval(this.pooling)
  },
  created () {
    if (this.token && !this.expired) {
      this.loadsAfterAuthorization()
    }
  }
}
