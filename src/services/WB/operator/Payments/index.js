import api from 'src/api'
import { date } from 'quasar'
import { getBeforeQuarterStart } from 'src/utils/mappers'

const { startOfDate } = date

const today = new Date()

export default {
  name: 'PaymentsController',
  data () {
    return {
      period: {
        from: startOfDate(today, 'month'),
        to: today,
        min: getBeforeQuarterStart(today),
        max: today,
      },
      list: [],
      loading: false
    }
  },
  computed: {
    total () {
      return this.list.reduce((acc, item) => {
        acc.paid += item.payment.amount
        acc.debt += item.currentDebt
        acc.delay = item.delay > acc.delay ? item.delay : acc.delay
        return acc
      }, {
        debt: 0,
        delay: 0,
        paid: 0
      })
    }

  },
  methods: {
    async getPayments () {
      this.loading = true
      setTimeout(async () => {
        const report = await api.crm.reportPayments(this.period)
        this.loading = false
        const list = report.data && report.data.map((item, index) => ({ index: index + 1, ...item }))

        list && this.$nextTick(function () {
          this.list = list
        })
      }, 1250)
    },
    setPaymentsPeriods (e, v) {
      this.period[e] = v
    }
  }
}
