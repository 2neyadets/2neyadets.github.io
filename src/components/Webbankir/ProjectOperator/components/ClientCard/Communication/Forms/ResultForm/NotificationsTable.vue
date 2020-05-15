<template lang="pug">
  .notifications-table
    q-table.my-sticky-header-table(
      :data="[currentMessages]"
      :columns="columns"
      row-key="name"
      separator="vertical"
      hide-bottom
      :dark="false"
    )
      template(slot="top" slot-scope="props")
        .full-width.flex.flex-center {{$t('communications.notificationsTable.title')}}
      template(slot="body" slot-scope="props")
        q-tr(:props="props")
          q-td.q-px-xs(v-for="col in props.cols" :key="col.name" :props="props")
            template(v-if="col.name === 'today'")
              span(:class="col.value === '-' || col.value >= 1 ? 'text-negative' : ''") {{col.value}}
            template(v-else-if="col.name === 'thisWeek'")
              span(:class="col.value === '-' || col.value >= 4 ? 'text-negative' : ''") {{col.value}}
            template(v-else-if="col.name === 'thisMonth'")
              span(:class="col.value === '-' || col.value >= 16 ? 'text-negative' : ''") {{col.value}}
            template(v-else)
              span {{col.value}}
</template>

<script>
export default {
  name: 'NotificationsTable',
  data () {
    return {
      columns: [
        {
          name: 'today',
          field: 'today',
          required: true,
          label: this.$t('communications.notificationsTable.today'),
          align: 'center',
          sortable: false
        },
        {
          name: 'thisWeek',
          field: 'thisWeek',
          required: true,
          label: this.$t('communications.notificationsTable.thisWeek'),
          align: 'center',
          sortable: false
        },
        {
          name: 'thisMonth',
          field: 'thisMonth',
          required: true,
          label: this.$t('communications.notificationsTable.thisMonth'),
          align: 'center',
          sortable: false
        }
      ]
    }
  },
  computed: {
    currentMessages () {
      // eslint-disable-next-line no-prototype-builtins
      return this.$operatorWB.loans.currentMessages.hasOwnProperty('today')
        ? this.$operatorWB.loans.currentMessages
        : {
          today: '-',
          thisWeek: '-',
          thisMonth: '-'
        }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
