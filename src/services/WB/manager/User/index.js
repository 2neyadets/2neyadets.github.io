import { LocalStorage } from 'quasar'
import jwtDecode from 'jwt-decode'
import api from 'src/api'
import { sortBy } from 'lodash'

const user = LocalStorage.getItem('manager-user-data') || null
const token = LocalStorage.getItem('manager-user-token') || null

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
  name: 'UserService',
  data () {
    return {
      groups: [],
      loading: {
        groups: false,
        user: false,
        ratings: false,
      },
      ratings: null,
      token,
      profile: initialProfile(),
      employees: []
    }
  },
  computed: {
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
    groupsForSelect () {
      return this.groups.length
        ? this.groups.map(group => {
          return {
            label: group.name,
            value: group.id,
          }
        })
        : []
    },
    shortName () {
      return this.profile.lastName + ' ' + this.profile.firstName
    },
    fullName () {
      return this.profile.firstName + ' ' + this.profile.middleName + ' ' + this.profile.lastName
    },
    department () {
      return this.profile.departmentName || ''
    },
    employeesComp () {
      return this.employees
    },
  },
  methods: {
    set (e, v) {
      this[e] = v
    },
    async login (data) {
      this.loading.user = true
      const res = await api.crm.userLogin(data)
      this.loading.user = false
      if (res === undefined || res.errors) {
        return false
      }
      const token = res.data.token
      const jwt = token && jwtDecode(token)
      if (token && jwt) {
        this.token = token
        this.profile = Object.assign({}, jwt.Data, res.data.profile)
        LocalStorage.set('manager-user-token', token)
        LocalStorage.set('manager-user-data', this.profile)
        this.$managerWB.layout.changeRoute('/')
        return true
      }
      return false
    },
    logout () {
      LocalStorage.remove('manager-user-token')
      this.token = null
      this.profile = Object.assign({}, {})
      this.$managerWB.layout.changeRoute('/login')
    },
    isUserHaveRoles (roles = []) {
      if (!this.profile.roles) return false
      if (typeof roles === 'string') roles = [roles]
      return roles.some(role => {
        return this.profile.roles.includes(role)
      })
    },
    async getGroupsForSuper () {
      this.loading.groups = true
      const res = await api.crm.getGroups()
      this.loading.groups = false
      this.groups = sortBy(res.data, 'name')
    },
    async getRatings () {
      this.loading.ratings = true
      setTimeout(async () => {
        const res = await api.crm.userRatingsHard()
        this.loading.ratings = false
        this.ratings = res.data
        this.ratings.groups.forEach(group => {
          group.employeeFullName = this.employees.find(employee => employee.portfolios === group.name).fullName
        })
      }, 2000)
    },
    async getEmployees () {
      this.loading.groups = true
      const res = await api.crm.getEmployees()
      this.loading.groups = false
      if (res.data) {
        this.employees = sortBy(res.data, 'fullName')
      }
    },
  },
  watch: {},
}
