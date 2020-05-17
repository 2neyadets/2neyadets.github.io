import { Platform } from 'quasar'

export default {
  name: 'LayoutService',
  data () {
    return {
      isBlocked: false,
      currentBlockIndex: 0,
      wasResized: true,
      isBanByToolbar: false,
      scroll: {
        el: null,
        ready: true,
        position: {
          last: 0,
          current: 0,
          max: 0,
        },
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
      return 550
    },
  },
  methods: {
    windowResized (v) {
      this.wasResized = true
      setTimeout(() => { this.wasResized = false }, this.scrollingPreventDefaultTimeMS)
    },

    goToSection (downDirection) {
      this.scrollHandler({
        ref: this.scroll.el,
        verticalPosition: this.scroll.el.scrollPosition
      }, downDirection)
    },
    goToSectionIndex (index) {
      if (index === this.currentBlockIndex) return false
      this.scrollHandler({
        ref: this.scroll.el,
        verticalPosition: this.scroll.el.scrollPosition
      }, null, index)
    },
    updateVars (v) {
      this.scroll.position.current = v.verticalPosition
      if (v.verticalSize !== undefined && v.verticalContainerSize !== undefined) {
        this.scroll.position.max = v.verticalSize - v.verticalContainerSize
      }
    },
    scrollHandler (v, downDirection = null, index = null) {
      this.updateVars(v)
      const { ref, ...scroll } = v,
        isDownDirection = downDirection !== null
          ? downDirection
          : scroll.verticalPosition >= this.scroll.position.last
      if (this.scroll.ready) {
        this.scroll.ready = false
        setTimeout(() => {
          this.scroll.ready = true
          this.currentBlockIndex = Math.round(this.scroll.position.current / this.getCurrentHeight())
        }, this.scrollingPreventDefaultTimeMS)
        this.changeScrollPosition({ ...v, isDownDirection }, this.wasResized, index)
        this.wasResized = false
      }
      this.scroll.position.last = Math.ceil(scroll.verticalPosition)
    },
    changeScrollPosition (scrollEvent, wasResized, targetIndex) {
      const { ref, isDownDirection } = scrollEvent,
        animationTimeMS = this.scrollingPreventDefaultTimeMS - 200,
        offsetHeight = this.getCurrentHeight()
      if (wasResized) {
        ref.setScrollPosition(this.currentBlockIndex * offsetHeight, animationTimeMS)
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
  },
  watch: {
    'scroll.el' (v) {
      if (v) {
      }
    }
  }
}
