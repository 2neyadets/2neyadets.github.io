<template lang="pug">
  .coefficients__table
    q-table(
      :data="groups"
      :columns="columns"
      :pagination.sync="pagination"
      :loading="$managerWB.user.loading.groups"
      :loading-label="$t('loanRedistribution.table.fetchingData')"
      :no-data-label="$t('loanRedistribution.table.noData')"
      separator="cell"
      row-key="name"
      dense
      dark
      color="WB-secondary"
    )
      template(#top="props")
        q-input.search(
          v-model="search"
          debounce="0"
          type="search"
          label="Поиск по группе"
          color="white"
          dense
          dark
          outlined
          clearable
        )
          template(#prepend)
            q-icon(name="search" color="white")
      template(#body="props")
        q-tr.cursor-pointer(@click.native="updateOneGroup(props.row)")
          q-td.q-pa-none(v-for="col in props.cols" :key="col.name" :props="props")
            span {{col.value}}
    ChangeCoefficientDialog(v-if="$managerWB.layout.dialogs.settings.changeCoefficient" :row="dataForDialog")
</template>

<script>
import ChangeCoefficientDialog from '../Dialogs/ChangeCoefficientDialog'

export default {
  name: 'CoefficientsTable',
  components: { ChangeCoefficientDialog },
  data () {
    return {
      search: null,
      pagination: {
        sortBy: 'name',
        descending: false,
        page: 1,
        rowsPerPage: 25
      },
      columns: [
        { name: 'name', field: 'name', label: 'Группа', align: 'center', sortable: true },
        { name: 'rank', field: 'rank', label: 'Весовой коэффициент', align: 'center', sortable: true },
      ],
      dataForDialog: null
    }
  },
  created () {
  },
  computed: {
    groups () {
      if (this.search) {
        return this.$managerWB.user.groups.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()))
      }
      return this.$managerWB.user.groups
    },
  },
  methods: {
    updateOneGroup (row) {
      this.dataForDialog = row
      this.$managerWB.layout.dialogs.settings.changeCoefficient = true
    }
  }
}
</script>

<style scoped lang="stylus">
  .coefficients__table
    border 1px solid
    border-radius 5px
    border-color #979797

    thead th, tbody td
      width 50%
</style>
