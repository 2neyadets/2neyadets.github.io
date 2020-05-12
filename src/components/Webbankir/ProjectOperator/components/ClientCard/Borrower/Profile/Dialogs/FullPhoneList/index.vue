<template lang="pug">
  .phone-list(v-if="clientPhones")
    q-table.my-sticky-header-table(
      :dark="true"
      flat
      :data="clientPhones"
      :columns="columns"
      row-key="id"
      :pagination.sync="pagination"
      hide-bottom
      separator="none"
      style="height: 700px"
    )
      template.fixed-body(slot="body" slot-scope="props")
        q-tr(:props="props" :data-prop="props")
          q-td(v-for="col in props.cols" :key="col.name" :props="props" :class="cssClass(col.name)")
            template(v-if="col.name === 'number'")
              span.phone-manager_color-grey.phone-type {{ $t('clients.phns.' + col.value.type )}}
              span {{ col.value.number }}
            template(v-else-if="col.name === 'operator'")
              | {{ (col.value && col.value.fullName) || '-' }}
            template(v-else-if="col.name === 'comment'")
              form.item.edit(
                @submit.prevent="saveComment(props.row)"
                v-if="isEditing(props.row)"
              )

                q-input(v-model="editing.comment" name="comment" placeholder="Введите комментарий" :dark="false" color="WB-primary")

                q-btn.button(
                  type="submit"
                  flat
                  size="sm"
                )
                  q-icon(class="far fa-save")

              .item.view(v-else)
                span
                  | {{ col.value | truncate }}
                  q-tooltip(v-if="showTooltip(col.value)") {{col.value }}

                q-btn.button(
                  v-if="!editing"
                  flat
                  size="sm"
                  @click.prevent="editItem(props.row)"
                )
                  q-icon(class="far fa-edit")

            template(v-else-if="col.name === 'status'")
              | {{ lastStatus(props.row) }}

            template(v-else-if="col.name === 'calls'")
              | {{ countCalls(props.row) }}

            template(v-else)
              span(v-html="col.value")

</template>

<script>
export default {
  name: 'FullPhoneList',
  data: () => ({
    editing: null,
    dialog: null,
    columns: [
      {
        name: 'source',
        required: true,
        label: 'Источник',
        align: 'left',
        field: 'source',
        sortable: false,
      },
      {
        name: 'number',
        required: true,
        label: 'Номер',
        align: 'left',
        field: 'phone',
      },
      {
        name: 'name',
        required: true,
        label: 'ФИО',
        align: 'left',
        field: 'owner',
      },
      {
        name: 'status',
        required: true,
        label: 'Статус',
        align: 'left',
        field: 'status',
      },
      {
        name: 'calls',
        required: true,
        label: 'Звонков',
        align: 'center',
        field: 'calls',
      },
      {
        name: 'comment',
        required: true,
        label: 'Комментарий',
        align: 'left',
        field: 'comment',
      },
      {
        name: 'operator',
        required: true,
        label: 'Сотрудник',
        align: 'left',
        field: 'operator',
      },
    ],
    pagination: {
      page: 1,
      rowsPerPage: 0
    },

  }),
  computed: {
    client () {
      return this.$operatorWB.clients.currentClient
    },
    clientPhones () {
      return this.$operatorWB.clients.currentPhones.map(item => {
        return Object.assign(item, {
          phone: {
            type: item.type,
            number: item.number
          }
        })
      })
    },
    clientCardModalOpened () {
      return this.$operatorWB.layout.clientCardModalOpened
    },
    communications () {
      return this.client.communications || []
    },
    autodial () {
      return this.client.phones.reduce((acc, item) => {
        acc[`${item.id}`] = item.autodial
        return acc
      }, {})
    }
  },
  filters: {
    truncate: function (value) {
      if (!value) return ''
      if (value.length > 30) {
        value = value.substr(0, 30)
        value += '...'
      }
      return value
    }
  },
  methods: {
    showTooltip (val) {
      return val && val.length > 30
    },
    lastStatus (item) {
      const arr = this.communications.filter(com => {
        // eslint-disable-next-line no-prototype-builtins
        if (com.channel && com.channel.phone && com.channel.phone.hasOwnProperty('number')) {
          return com.channel.phone.number === item.phone.number
        }
        return false
      })
      const last = arr.sort((a, b) => a.contactedAt < b.contactedAt)[0]
      return last && this.$t('communications.status.' + last.status)
    },
    countCalls (item) {
      const arr = this.communications.filter(com => {
        // eslint-disable-next-line no-prototype-builtins
        if (com.channel && com.channel.phone && com.channel.phone.hasOwnProperty('number')) {
          return com.channel.phone.number === item.phone.number
        }
        return false
      })
      return arr.length || ''
    },
    cssClass (val) {
      return 'phone-manager__' + val
    },
    isEditing (item) {
      return this.editing && this.editing.id === item.id
    },
    editItem (item) {
      this.editing = item
    },
    saveComment (item) {
      this.$operatorWB.clients.editPhone({
        id: this.editing.id,
        comment: this.editing.comment
      })
      this.editing = null
    },
  },
  watch: {
    clientCardModalOpened (v, o) {
      if (!v) {
        this.dialog && this.dialog.close()
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .modal-content
    background: white
</style>
