<template lang="pug">
  q-btn(
    :flat="active !== name"
    :color="active === name ? 'WB-primary' : 'default'"
    :label="title"
    :disable="disable"
    @click="click"
    size="sm"
  )
</template>

<script>
export default {
  name: 'FilterButton',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    active: {
      type: String,
      required: false
    },
    disable: {
      type: Boolean,
      required: false
    },
    count: {
      type: Number,
      required: false
    }
  },
  computed: {
    title () {
      return this.label + (this.count ? ' (' + this.count + ')' : '')
    }
  },
  methods: {
    click () {
      this.$emit('change', this.name)
    }
  }
}
</script>

<style scoped>
</style>
