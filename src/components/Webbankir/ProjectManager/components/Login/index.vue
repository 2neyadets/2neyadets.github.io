<template lang="pug">
  q-page.bg-blue-grey-10.row.justify-center.items-center
    q-form.col-xs-12.col-sm-8.col-md-6.col-lg-4.col-xl-2(@submit.prevent="doLogin")
      q-card.bg-white.text-black(:dark="false")
        q-card-section
          h5.q-my-none Вход в систему
        q-card-section
          .q-mb-md
            q-input(
              v-model.trim="form.login"
              label="Логин"
              placeholder="Имя пользователя или email"
              :rules="[ v => !!v || 'Введите логин' ]"
              lazy-rules
              :dark="false"
            )
              template(#before)
                q-icon(name="account_box")
            q-input(
              v-model="form.password"
              :type="isPwd ? 'password' : 'text'"
              label="Пароль"
              placeholder="Пароль"
              :rules="[ v => !!v || 'Введите пароль' ]"
              lazy-rules
              :dark="false"
            )
              template(#before)
                q-icon(name="lock")
              template(#append)
                q-icon.cursor-pointer(
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  @click="isPwd = !isPwd"
                )
          .row.q-mb-md
            q-btn.self-center.bg-WB-primary.text-white.full-width(
              type="submit"
              :loading="$managerWB.user.loading.user"
            ) Войти
              template(#loading)
                q-spinner(size="20px")
                span загрузка...
</template>

<script>
import { LocalStorage } from 'quasar'

export default {
  name: 'WBManagerProjectLogin',
  data () {
    return {
      form: {
        login: '',
        password: ''
      },
      isPwd: true
    }
  },
  computed: {
    token () {
      return this.$managerWB.user.token
    },
  },
  methods: {
    doLogin () {
      if (this.form.login && this.form.password) {
        this.$managerWB.user.login({
          name: this.form.login,
          password: this.form.password,
        })
      }
    }
  },
  mounted () {
    const user = LocalStorage.getItem('manager-user-data')
    if (user) {
      this.form.login = user.login
    }
  }
}
</script>

<style scoped lang="stylus">
  .q-card-actions
    margin 0
    padding 15px
    justify-content space-between

  form .q-field
    margin-bottom: 8px
</style>
