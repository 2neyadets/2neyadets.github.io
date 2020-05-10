import { LocalStorage } from 'quasar'

export default {
  name: 'HeroesService',
  data () {
    return {
      route: {
        path: '/',
        params: {
          section: '',
          category: '',
          item: null,
        },
      },
      cancelHeroesStartNotify: LocalStorage.getItem('cancelHeroesStartNotify') || false,
      cancelHeroesPapersNotify: LocalStorage.getItem('cancelHeroesPapersNotify') || false,
      culture: {
        '01': [
          false,
          false,
          false,
          false
        ],
        '02': [
          false,
          false,
          false,
          false
        ]
      }
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
    'route.path' (v) {
      const params = this.route.params
      const arr = v.split('/')
      if (arr.length >= 3) {
        params.section = arr[2]
        if (arr.length >= 4) {
          params.category = arr[3]
          params.item = null
          if (arr.length >= 5) {
            params.item = arr[4]
          }
        } else {
          params.category = ''
        }
      }
    }
  }
}
