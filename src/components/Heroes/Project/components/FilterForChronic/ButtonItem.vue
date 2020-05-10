<template lang="pug">
  q-btn.filter-for-chronic__button-item.nav-small__button.nav-small__button_right-margin(
    :label="item === 'ВСЕ' ? item : ''"
    :icon="item === 'ВСЕ' ? '' : item"
    :class="item === 'ВСЕ' ? 'text-btn' : 'img-btn'"
    :color="item !== filter ? '' : 'white'"
    :text-color="item !== filter ? 'white' : 'black'"
    :outline="item !== filter"
    unelevated
    @click="click"
  )
</template>

<script>
export default {
  name: 'FilterForChronicButtonItem',
  props: {
    item: {
      type: String,
      required: true
    },
    filter: {
      type: String,
      required: true
    }
  },
  methods: {
    click () {
      this.$emit('click', this.item)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
