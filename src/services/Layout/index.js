import { Platform } from 'quasar'

export default {
  name: 'LayoutService',
  data () {
    return {
      currentBlockIndex: 0,
      wasResized: false,
      scrollEvent: null,
      scroll: {
        el: null,
        ready: true,
        position: {
          current: 0,
          max: 0,
        },
        containerHeight: 0,
      },
      touches: {
        fingersLength: null,
        idOfMoved: null,
        isMoving: false,
        moves: [],
      },
    }
  },
  created () {
  },
  computed: {
    activeColor () {
      return this.$q.dark.isActive ? 'secondary' : 'primary'
    },
    activeTextColor () {
      return this.$q.dark.isActive ? 'dark' : 'white'
    },
    getOS () {
      return Platform && Platform.is && Platform.is.platform
    },
    thumbStyle () {
      return {
        right: '2px',
        backgroundColor: 'white',
        width: '8px',
        opacity: 0.5
      }
    },
    btnsSizeForProjectCard () {
      return this.$q.screen.gt.md
        ? '14px'
        : this.$q.screen.gt.sm
          ? '12px'
          : this.$q.screen.gt.xs
            ? '8px'
            : '7px'
    },
    scrollingPreventDefaultTimeMS () {
      return this.$q.platform.is.mobile
        ? this.$q.screen.width > 420
          ? 900
          : 800
        : 550
    },
  },
  methods: {
    windowResized (v) {
      this.wasResized = true
      this.updateVars(this.scroll.el)
      this.goToSectionIndex(this.currentBlockIndex)
    },

    goToSection (isDownDirection) {
      this.scrollHandler({ ref: this.scroll.el }, isDownDirection)
    },
    goToSectionIndex (index, isDownDirection = true) {
      this.scrollHandler({ ref: this.scroll.el }, isDownDirection, index)
    },
    updateVars (ref) {
      if (ref.scrollSize !== undefined && ref.containerHeight !== undefined) {
        this.scroll.position.max = ref.scrollSize - ref.containerHeight
        this.scroll.containerHeight = ref.containerHeight
      }
      this.currentBlockIndex = Math.round(ref.scrollPosition / this.getCurrentHeight())
    },
    scrollHandler (v, isDownDirection = null, index = null) {
      if (this.scroll.ready) {
        this.changeScrollPosition({ ...v, isDownDirection }, this.wasResized, index)
        this.wasResized = false
      } else {
        if (this.scrollEvent) this.scrollEvent.preventDefault()
      }
    },
    changeScrollPosition (scrollEvent, wasResized, targetIndexExternal) {
      const { ref, isDownDirection } = scrollEvent,
        animationTimeMS = 350,
        containerHeight = window.innerHeight - 50
      // console.log(111, 'wasResized', wasResized)
      // console.log(222, 'isDownDirection', isDownDirection)
      // console.log(333, 'targetIndexExternal', targetIndexExternal)
      if (wasResized) {
        // 1.
        // скрол, источником которого является изменение размеров экрана
        // после ресайза нужно вернуться к тому блоку, с которого был ресайз
        ref.setScrollPosition(this.currentBlockIndex * containerHeight, animationTimeMS)
      } else {
        // 2.
        // скрол, c указанием индекса целевого блока, к которому необходимо доскролить
        // если в функцию передан targetIndexExternal === null, вычисляем индекс блока по направлению
        const targetIndexIntermal = isDownDirection ? this.currentBlockIndex + 1 : this.currentBlockIndex - 1
        ref.setScrollPosition((targetIndexExternal !== null ? targetIndexExternal : targetIndexIntermal) * containerHeight, animationTimeMS)
      }
    },
    getCurrentHeight () {
      const el = document.getElementById('scroll')
      return (el && el.offsetHeight) || 1000
    },

    touchStart (event) {
      this.touches.fingersLength = event.touches.length
    },
    touchMove (event) {
      if (event.changedTouches.length >= 2 || this.touches.fingersLength >= 2) { // если перемещающихся тачей 2 или пальца 2 и больше
        event.preventDefault()
        return false
      }
      event.preventDefault()
      if (this.touches.idOfMoved === null) {
        this.touches.idOfMoved = event.changedTouches['0'].identifier
        this.touches.moves.push(event.changedTouches['0'])
      } else {
        let keys = Object.keys(event.changedTouches)
        keys = keys.splice(keys.findIndex(item => item === 'length'), 1)
        for (const key in keys) {
          if (event.changedTouches[key].identifier === this.touches.idOfMoved) {
            this.touches.moves.push(event.changedTouches[key])
          }
        }
      }
      setTimeout(() => {
        if (this.touches.isMoving && event.changedTouches.length === 1) this.findTouchDirectionAndScroll()
      }, 250)
      this.touches.isMoving = true
    },
    endOrCancelTouchAction (event) {
      if (this.touches.isMoving && this.touches.fingersLength === 1) { // если палец один и последнее действие было движением
        event.preventDefault()
        this.findTouchDirectionAndScroll()
      } else {
        this.clearTouches()
      }
    },
    findTouchDirectionAndScroll (diffInPxForScroll = 50) {
      if (this.touches.moves.length <= 2) {
        this.clearTouches()
        return false
      }
      const moveArr = this.touches.moves,
        diff = moveArr[0].screenY - moveArr[moveArr.length - 1].screenY
      if (Math.abs(diff) > diffInPxForScroll) {
        if (diff > 0 && this.scroll.position.current === this.scroll.position.max) {
          this.clearTouches()
          return false
        } else if (diff < 0 && this.scroll.position.current === 0) {
          this.clearTouches()
          return false
        } else {
          this.goToSection(diff > 0)
        }
      }
      this.clearTouches()
    },
    clearTouches () {
      this.touches.fingersLength = null
      this.touches.idOfMoved = null
      this.touches.isMoving = false
      this.touches.moves = []
    },
  },
  watch: {
    scrollEvent (event) {
      if (event) {
        event.preventDefault()
        if (event.type === 'wheel') this.goToSection(event.deltaY > 0)
      }
    },
    'currentBlockIndex' (v) {
      // console.log('currentBlockIndex: ', v)
    },
  }
}
