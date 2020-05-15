import api from 'src/api'
import { Notify } from 'quasar'
import moment from 'moment/moment'

moment.locale('ru')
import { sortBy } from 'lodash'
import { columnsDefault } from 'src/components/Webbankir/ProjectManager/components/Schedule/ScheduleMain/ScheduleTable/columns'
import { i18n } from 'src/boot/i18n'
import { changeDateFormat } from 'src/utils/helpers'

export default {
  name: 'ScheduleService',
  data () {
    return {
      loading: false,
      modalObj: {},
      allTimesheets: [],
      currentTimesheetObj: {},
      idOfThisMonthTimesheet: 0,
      changingMoment: {},
      firstDayOfChangingMonthString: '',
      monthsForChange: 0,
      schedulesData: [],
      schedulesForSend: [],
      employeeObj: {
        add: [],
        delete: null
      },
      currentIndexOfChangingDay: -1,
      firstWorkDayDate: ''
    }
  },
  created () {
    this.changingMoment = moment()
  },
  computed: {
    columns () {
      const arr = []
      const moment = this.firstDayOfChangingMoment
      for (let i = 0; i < columnsDefault.length; i++) {
        arr.push(columnsDefault[i])
      }
      for (let i = 0; i < this.daysInMonthOfChangingMoment; i++) {
        if (i === 0) {
          arr.push({
            name: `day${i + 1}`,
            label: [i + 1, moment.format('dd')],
            align: 'center',
            field: row => row.schedule[i],
            sortable: false,
            type: 'array'
          })
        } else {
          arr.push({
            name: `day${i + 1}`,
            label: [i + 1, moment.add({ days: 1 }).format('dd')],
            align: 'center',
            field: row => row.schedule[i],
            sortable: false,
            type: 'array'
          })
        }
      }
      arr.push({
        name: 'totalShifts',
        label: i18n.t('schedule.labels.shifts'),
        align: 'center',
        field: row => row.schedule,
        sortable: false,
        type: 'number'
      })
      arr.push({
        name: 'totalHours',
        label: i18n.t('schedule.labels.hours'),
        align: 'center',
        field: row => row.schedule,
        sortable: false,
        type: 'string'
      })
      moment.startOf('month')
      return arr
    },
    columnsForDownload () {
      const arr = this.columns.map(column => {
        let label = column.label
        if (Array.isArray(label)) {
          label = `${label[0]} / ${label[1]}`
        }
        return {
          label: label,
          field: column.name
        }
      })
      arr.splice(0, 0, {
        label: 'Тип графика',
        field: 'type'
      })
      arr.splice(2, 0, {
        label: 'Должность',
        field: 'position'
      })
      return arr
    },
    tableData () {
      this.schedulesData.forEach(function (item, index) {
        item.__index = index
      })
      return this.schedulesData
    },
    tableDataForDownload () {
      return sortBy(this.tableData.map(row => {
        const obj = {}
        obj.type = i18n.t('schedule.typesOfSchedule.' + row.type)
        obj.employee = row.employee.fullName
        obj.portfolios = row.employee.portfolios
        obj.position = row.employee.position
        for (let i = 1; i <= this.daysInMonthOfChangingMoment; i++) {
          obj[`day${i}`] = this.getLetter(i - 1, row.schedule)
        }
        obj.totalShifts = this.totalShifts(row.schedule)
        obj.totalHours = this.totalHours(row.schedule)
        return obj
      }), 'employee')
    },
    schedulesForChanges () {
      return this.schedulesForSend
    },
    todayDateForHeader () {
      return moment().format('DD MMMM YYYY')
    },
    todayDateDashedFormat () {
      return moment().format('YYYY-MM-DD')
      // return moment().add({ months: -1 }).format('YYYY-MM-DD')
    },
    startOfCurrentMonthDashedFormat () {
      return moment().startOf('month').format('YYYY-MM-DD')
    },
    dayOfWeek () {
      return moment().format('dddd')
    },
    firstDayOfChangingMoment () {
      this.firstDayOfChangingMonthString = this.changingMoment.startOf('month').format('YYYY-MM-DD')
      return this.changingMoment.startOf('month')
    },
    daysInMonthOfChangingMoment () {
      return this.changingMoment.daysInMonth()
    },
    monthAndYear () {
      return this.firstDayOfChangingMoment.format('MMMM YYYY').toUpperCase()
    },
    thisMonthTimesheets () {
      return this.allTimesheets && this.allTimesheets.filter(timesheet => timesheet.period === this.firstDayOfChangingMonthString)
    },
    currentTimesheetPeriod () {
      // eslint-disable-next-line no-prototype-builtins
      return (this.currentTimesheetObj && this.currentTimesheetObj.hasOwnProperty('timesheet') && this.currentTimesheetObj.timesheet.period) || ''
    },
    // portfoliosOfAllEmployees () {
    //   if (this.$managerWB.user.groups.length) {
    //     let arr = []
    //     for (let i = 0; i < this.$managerWB.user.groups.length; i++) {
    //       arr.push(this.$managerWB.user.groups[i].name)
    //     }
    //     return arr
    //   } else {
    //     return []
    //   }
    // },
    // portfoliosOfEmployeesInCurrentTimesheet () {
    //   let arr = []
    //   for (let i = 0; i < this.tableData.length; i++) {
    //     arr.push(this.tableData[i].employee.portfolios)
    //   }
    //   return arr
    // },
    // portfoliosOfEmployeesNotInCurrentTimesheet () {
    //   return this.portfoliosOfAllEmployees.filter(portfolio => {
    //     return !this.portfoliosOfEmployeesInCurrentTimesheet.includes(portfolio)
    //   })
    // },
    employeesInCurrentTimesheetForSelect () {
      if (this.tableData.length) {
        const arr = []
        for (let i = 0; i < this.tableData.length; i++) {
          arr.push(Object.assign({}, {
            label: this.tableData[i].employee.fullName,
            value: this.tableData[i].employee.id,
          }))
        }
        return sortBy(arr, 'label')
      } else {
        return []
      }
    },
    employeesForAddInTimesheetForSelect () {
      const arrOfFullNamesForCurrentTimesheet = []
      const allEmployees = []
      for (let i = 0; i < this.$managerWB.user.employeesComp.length; i++) {
        allEmployees.push(Object.assign({}, this.$managerWB.user.employeesComp[i]))
      }
      const arr = []
      for (let i = 0; i < this.tableData.length; i++) {
        arrOfFullNamesForCurrentTimesheet.push(this.tableData[i].employee.fullName)
      }
      for (let i = 0; i < allEmployees.length; i++) {
        if (arrOfFullNamesForCurrentTimesheet.includes(allEmployees[i].fullName)) {
          allEmployees.splice(i, 1)
          i--
        }
      }
      for (let i = 0; i < allEmployees.length; i++) {
        arr.push(Object.assign({}, {
          label: allEmployees[i].fullName,
          value: this.getIdByFullName(allEmployees[i].fullName)
        }))
      }
      return sortBy(arr, 'label')
    },
    summaryTodayArrayOfDays () {
      const arr = []
      for (let i = 0; i < this.tableData.length; i++) {
        arr.push(this.tableData[i].schedule.find(day => day.date === this.todayDateDashedFormat))
      }
      return arr
    },
    summaryStatusesForToday () {
      const obj = {
        plannedWorkday: 0,
        plannedDayOff: 0,
        vacation: 0,
        unpaidLeave: 0,
        sickLeave: 0,
        truancy: 0,
        rescheduledShift: 0,
        presence: 0,
        withoutStatus: 0,
        default: 0
      }
      const arr = this.summaryTodayArrayOfDays
      for (let i = 0; i < arr.length; i++) {
        // eslint-disable-next-line no-prototype-builtins
        if (arr[i] === undefined || !arr[i].hasOwnProperty('status')) {
          arr.splice(i, 1)
          obj.withoutStatus++
          i--
        }
      }
      for (let i = 0; i < arr.length; i++) {
        switch (arr[i].status) {
          case 'plannedWorkday':
            obj.plannedWorkday++
            break
          case 'plannedDayOff':
            obj.plannedDayOff++
            break
          case 'vacation':
            obj.vacation++
            break
          case 'unpaidLeave':
            obj.unpaidLeave++
            break
          case 'sickLeave':
            obj.sickLeave++
            break
          case 'truancy':
            obj.truancy++
            break
          case 'rescheduledShift':
            obj.rescheduledShift++
            break
          case 'presence':
            obj.presence++
            break
          default:
            obj.default++
        }
      }
      return obj
    }
  },
  methods: {
    async getAllTimesheets () {
      this.loading = true
      const res = await api.crm.getAllTimesheets()
      this.loading = false
      this.allTimesheets = res.data
    },
    async createNewTimesheet () {
      this.loading = true
      const res = await api.crm.createNewTimesheet({
        period: this.firstDayOfChangingMonthString,
        type: 'TwoOverTwo'
      }, this)
      this.loading = false
      if (res && res.data) {
        this.currentTimesheetObj = res.data
        this.idOfThisMonthTimesheet = this.currentTimesheetObj.id
        this.schedulesData = res.data.schedules
        this.schedulesForSend = this.schedulesData.map(oneEmployee => {
          return {
            employeeId: oneEmployee.employee.id,
            type: oneEmployee.type,
            schedule: oneEmployee.schedule
          }
        })
        await this.getAllTimesheets()
        Notify.create({
          message: this.$app.$t('managerWBNotify.schedule.timesheetCreated'),
          color: 'positive',
          position: 'bottom',
          icon: 'check_circle_outline'
        })
      }
    },
    async getOneTimesheet (payload) {
      this.loading = true
      setTimeout(async () => {
        const res = await api.crm.getOneTimesheet(payload)
        this.loading = false
        if (res && res.data) {
          this.currentTimesheetObj = res.data
          this.idOfThisMonthTimesheet = this.currentTimesheetObj.timesheet.id
          this.schedulesData = res.data.schedules
          this.schedulesForSend = this.schedulesData.map(oneEmployee => {
            return {
              employeeId: oneEmployee.employee.id,
              type: oneEmployee.type,
              schedule: oneEmployee.schedule
            }
          })
          Notify.create({
            message: this.$app.$t('managerWBNotify.schedule.timesheetReceived'),
            color: 'positive',
            position: 'bottom',
            icon: 'check_circle_outline'
          })
        }
      }, 2000)
    },
    async autoFillGraphics (payload) {
      this.loading = true
      const res = await api.crm.autoFillGraphics(payload, this)
      this.loading = false
      if (res && res.data) {
        this.schedulesData = res.data.schedules
        this.schedulesForSend = this.schedulesData.map(oneEmployee => {
          return {
            employeeId: oneEmployee.employee.id,
            type: oneEmployee.type,
            schedule: oneEmployee.schedule
          }
        })
        Notify.create({
          message: this.$app.$t('managerWBNotify.schedule.autocompleteSuccessful'),
          color: 'positive',
          position: 'bottom',
          icon: 'check_circle_outline'
        })
      }
    },
    async saveChangesInCurrentTimesheet (payload) {
      if (this.schedulesForChanges.length) {
        this.loading = true
        const res = await api.crm.saveChangesInCurrentTimesheet(payload, this)
        this.loading = false
        if (res && res.data) {
          this.schedulesData = res.data.schedules
          this.schedulesForSend = this.schedulesData.map(oneEmployee => {
            return {
              employeeId: oneEmployee.employee.id,
              type: oneEmployee.type,
              schedule: oneEmployee.schedule
            }
          })
          Notify.create({
            message: this.$app.$t('managerWBNotify.schedule.changesSaved'),
            color: 'positive',
            position: 'bottom',
            icon: 'check_circle_outline'
          })
        }
      }
    },
    async addEmployee (payload) {
      this.loading = true
      const res = await api.crm.addEmployee(payload, this)
      this.loading = false
      if (res && res.data) {
        this.employeeObj.add = []
        Notify.create({
          message: this.$app.$t('managerWBNotify.schedule.employeeAdded', { fullName: res.data.employee.fullName }),
          color: 'positive',
          position: 'bottom',
          icon: 'check_circle_outline'
        })
        // await this.getOneTimesheet({ id: this.idOfThisMonthTimesheet })
      }
    },
    async deleteEmployee (payload) {
      this.loading = true
      const res = await api.crm.deleteEmployee(payload, this)
      this.loading = false
      if (res.status === 200) {
        this.employeeObj.delete = null
        Notify.create({
          message: this.$app.$t('managerWBNotify.schedule.employeeDeleted'),
          color: 'positive',
          position: 'bottom',
          icon: 'check_circle_outline'
        })
        await this.getOneTimesheet({ id: this.idOfThisMonthTimesheet })
      }
    },
    async findMyTimesheet (date) {
      this.schedulesForSend = []
      const thisMonthTimesheetObj = this.allTimesheets.find(timesheet => timesheet.period === date)
      if (thisMonthTimesheetObj) {
        // const myTimesheetForThisMonth = arrayOfThisMonthTimesheets.find(timesheet => timesheet.creator.id === this.$managerWB.user.profile.userId)
        // if (myTimesheetForThisMonth) {
        this.idOfThisMonthTimesheet = thisMonthTimesheetObj.id
        await this.getOneTimesheet({ id: thisMonthTimesheetObj.id })
        // } else {
        //   this.schedulesData = []
        // }
      } else {
        this.schedulesData = []
      }
      // this.schedulesForSend = []
      // const arrayOfThisMonthTimesheets = this.allTimesheets.filter(timesheet => timesheet.period === date)
      // if (arrayOfThisMonthTimesheets.length) {
      //   const myTimesheetForThisMonth = arrayOfThisMonthTimesheets.find(timesheet => timesheet.creator.id === this.$managerWB.user.profile.userId)
      //   if (myTimesheetForThisMonth) {
      //     this.idOfThisMonthTimesheet = myTimesheetForThisMonth.id
      //     await this.getOneTimesheet({ id: myTimesheetForThisMonth.id })
      //   } else {
      //     this.schedulesData = []
      //   }
      // } else {
      //   this.schedulesData = []
      // }
    },
    changeMonth (plus = true) {
      if (moment.isMoment(this.changingMoment)) {
        const time = this.changingMoment.add({ months: plus ? 1 : -1 })
        this.changingMoment = null
        this.changingMoment = time
      } else {
        this.changingMoment = moment().add({ months: this.monthsForChange })
      }
      this.employeeObj.add = []
      this.employeeObj.delete = null
    },
    refresh () {
      const data = this.schedulesData
      this.schedulesData = []
      this.schedulesData = data
    },
    getIdByFullName (fullName) {
      return this.$managerWB.user.employeesComp.find(employee => employee.fullName === fullName).id
    },
    totalShifts (arrayOfSchedules) {
      let shifts = 0
      for (let i = 0; i < arrayOfSchedules.length; i++) {
        if (arrayOfSchedules[i].status === 'presence' || arrayOfSchedules[i].status === 'plannedWorkday') {
          shifts++
        }
      }
      return shifts
    },
    totalHours (arrayOfSchedules) {
      let hours = 0
      for (let i = 0; i < arrayOfSchedules.length; i++) {
        // eslint-disable-next-line no-prototype-builtins
        if (arrayOfSchedules[i].hasOwnProperty('hours') && arrayOfSchedules[i].hours !== 0) {
          hours += arrayOfSchedules[i].hours
        }
      }
      return hours
    },
    getLetter (index, arrayOfSchedules) {
      if (arrayOfSchedules.length > 0) {
        // eslint-disable-next-line no-prototype-builtins
        if (arrayOfSchedules[index] && arrayOfSchedules[index].hasOwnProperty('status')) {
          switch (arrayOfSchedules[index].status) {
            case 'plannedWorkday':
              return `Р ( ${arrayOfSchedules[index].hours} )`
            case 'presence':
              return `Я ( ${arrayOfSchedules[index].hours} )`
            case 'plannedDayOff':
              return 'В'
            case 'vacation':
              return 'ОТ'
            case 'unpaidLeave':
              return 'ДО'
            case 'sickLeave':
              return 'Б'
            case 'truancy':
              return 'ПР'
            case 'rescheduledShift':
              return 'ПС'
            case 'withoutStatus':
              return 'БС'
            default:
              return ''
          }
        }
      }
    }
  },
  watch: {
    firstDayOfChangingMonthString (v) {
      this.findMyTimesheet(v)
      this.firstWorkDayDate = changeDateFormat(v, 'YYYY-MM-DD', 'YYYY/MM/DD')
    },
    loading (v) {
      if (v) {
        this.$q.loading.show()
      } else {
        this.$q.loading.hide()
      }
    },
  }
}
