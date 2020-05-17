import { Platform } from 'quasar'

export default {
  name: 'LayoutService',
  data () {
    return {
      isBlocked: false,
      currentBlockIndex: 0,
      wasResized: false,
      isBanByToolbar: false,
      scrollEvent: null,
      scroll: {
        el: null,
        ready: true,
        position: {
          last: 0,
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
      return this.$q.platform.is.mobile ? 800 : 550
    },
  },
  methods: {
    windowResized (v) {
      this.wasResized = true
      this.updateVars({ ref: this.scroll.el })
      this.goToSectionIndex(this.currentBlockIndex)
    },

    goToSection (downDirection) {
      this.scrollHandler({
        ref: this.scroll.el,
        verticalPosition: this.scroll.el.scrollPosition
      }, downDirection)
    },
    goToSectionIndex (index, downDirection = true) {
      this.scrollHandler({
        ref: this.scroll.el,
        verticalPosition: this.scroll.el.scrollPosition
      }, downDirection, index)
    },
    updateVars (v) {
      this.scroll.position.current = v.ref.scrollPosition
      if (v.ref.scrollSize !== undefined && v.ref.containerHeight !== undefined) {
        this.scroll.position.max = v.ref.scrollSize - v.ref.containerHeight
        this.scroll.containerHeight = v.ref.containerHeight
      }
      this.scroll.position.last = Math.ceil(v.ref.scrollPosition)
      this.currentBlockIndex = Math.round(v.ref.scrollPosition / this.getCurrentHeight())
    },
    scrollHandler (v, downDirection = null, index = null) {
      if (this.scroll.ready) {
        this.scroll.ready = false
        setTimeout(() => {
          this.scroll.ready = true
          this.updateVars(v)
        }, this.scrollingPreventDefaultTimeMS)
        this.changeScrollPosition({ ...v, isDownDirection: downDirection }, this.wasResized, index)
        this.wasResized = false
      } else {
        this.strictPreventDefault()
      }
    },
    changeScrollPosition (scrollEvent, wasResized, targetIndex) {
      const { ref, isDownDirection } = scrollEvent,
        animationTimeMS = this.$q.platform.is.mobile ? 400 : 350,
        offsetHeight = this.getCurrentHeight()
      if (wasResized) {
        ref.setScrollPosition(this.currentBlockIndex * (window.innerHeight - 50), animationTimeMS)
      } else {
        if (!this.isBanByToolbar) {
          if (targetIndex === null) {
            const offset = Math.ceil(isDownDirection ? offsetHeight : -offsetHeight)
            ref.setScrollPosition(this.scroll.position.last + offset, animationTimeMS)
          } else {
            ref.setScrollPosition(targetIndex * offsetHeight, animationTimeMS)
          }
        }
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
    strictPreventDefault () {
      if (this.scrollEvent) this.scrollEvent.preventDefault()
    }
  },
  watch: {
    scrollEvent (event) {
      if (event) {
        event.preventDefault()
        if (event.type === 'wheel') this.goToSection(event.deltaY > 0)
      }
    },
    'scroll.el' (v) {
    },
    'scroll.ready' (v) {
    }
  }
}
