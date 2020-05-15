<template lang="pug">
  .mailing-groups__block.filter__block.q-mx-xs.full-width
    .flex.justify-center.items-center.text-center.q-mt-xs
      span Группа {{role}}
    .flex.justify-center.items-center.full-width
      .q-px-md.q-pb-md.full-width
        q-select.max-h-40px.min-w-200px.full-width(
          @input="$managerWB.mailing.isGroupIdsEmpty = false"
          transition-show="fade"
          transition-hide="fade"
          v-model="$managerWB.mailing.filters.groupsArrayOfObjects"
          multiple
          use-chips
          :options="groups"
          standout="bg-WB-secondary text-WB-secondary"
          clearable
          dense
          dark
          outlined
          color="WB-secondary"
          popup-content-class="bg-WB-dark text-white"
          options-dense
          :error="$managerWB.mailing.isGroupIdsEmpty"
        )
</template>

<script>
export default {
  name: 'MailingGroupsBlock',
  data () {
    return {
      role: null,
    }
  },
  created () {
    if (this.$managerWB.user.isUserHaveRoles('operatorHard')) this.role = 'Хард'
  },
  computed: {
    groups () {
      return this.$managerWB.user.groupsForSelect.filter(group => group.label.includes(this.role))
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
</style>
