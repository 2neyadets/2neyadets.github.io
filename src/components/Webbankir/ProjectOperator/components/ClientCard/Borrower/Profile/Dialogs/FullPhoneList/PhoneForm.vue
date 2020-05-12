<template lang="pug">

  form.modal-phone(@submit.prevent="addPhone")
    .row.gutter-sm.items-center
      q-input.col.modal__input(
        v-model="formated"
        type="tel"
        maxlength="11"
        placeholder="+7 (978) 654-3210"
        :label="$t('clients.phoneForm.number')"
        :rules="[v => !isAddedPhone(v) || 'Телефон уже добавлен']"
        orientation="vertical"
        outlined
        dense
        bg-color="white"
        :dark="false"
        color="WB-primary"
      )
      q-input.col.modal__input(
        v-model="form.owner"
        type="text"
        :placeholder="$t('clients.phoneForm.owner')"
        :label="$t('clients.phoneForm.owner')"
        orientation="vertical"
        outlined
        dense
        bg-color="white"
        :dark="false"
        color="WB-primary"
      )
      q-input.col.modal__input(
        v-model="form.comment"
        type="text"
        :placeholder="$t('clients.phoneForm.comment')"
        :label="$t('clients.phoneForm.comment')"
        orientation="vertical"
        outlined
        dense
        bg-color="white"
        :dark="false"
        color="WB-primary"
      )

      q-btn.modal__btn.min-h-40px(
        color="WB-primary"
        type="submit"
        :disable="!form.number || form.number.length < 11 || isAddedPhone(form.number)"
        :loading="$operatorWB.clients.loading.phone"
        v-close-popup
      )
        | {{$t('modals.buttons.save')}}
        q-spinner(slot="loading" size="20px")

</template>

<script>
import { mask } from 'vue-the-mask'

const initialForm = () => ({
  type: 'mobile',
  number: null,
  owner: null,
  comment: null
})
export default {
  name: 'PhoneForm',
  props: ['opened', 'loading'],
  directives: { mask },
  data () {
    return {
      options: [
        {
          label: this.$t('clients.phones.mobile'),
          value: 'mobile'
        },
        {
          label: this.$t('clients.phones.work'),
          value: 'work'
        },
        {
          label: this.$t('clients.phones.home'),
          value: 'home'
        },
      ],
      form: initialForm(),
    }
  },
  computed: {
    formated: {
      get () {
        return this.form.number
      },
      set (v) {
        let phone = v.replace(/[\s+\-()]*/gi, '')
        const first = phone.substr(0, 1)
        if (first === '8') {
          phone = '7' + phone.slice(1)
        }
        if (!['8', '7'].includes(first)) {
          phone = '7' + phone
        }
        this.$nextTick(function () {
          this.form.type = 'additional'
          this.form.number = phone
        })
      }

    }
  },
  methods: {
    addPhone () {
      this.$operatorWB.clients.addPhone(this.form)
        .then(response => {
          if (response) {
            this.form = Object.assign({}, initialForm())
          }
        })
    },
    close () {
      this.$emit('close')
    },
    isAddedPhone (formNumber) {
      return !!this.$operatorWB.clients.currentPhones.find(phoneObj => phoneObj.number === formNumber)
    }
  }
}
</script>

<style scoped lang="stylus">
  .modal__btn
    margin-top: 15px

  .modal-phone
    .modal__input
      background: $WB-modal-bg-color

    .modal__buttons
      margin 0

    .modal__btn
      margin 0
</style>
