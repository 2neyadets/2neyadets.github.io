<template lang="pug">
  q-page.bg-blue-grey-10.row.justify-center.items-center
    q-form.col-xs-12.col-sm-8.col-md-6.col-lg-3(@submit.prevent="doLogin")
      q-card.bg-white.text-black(:dark="false")
        q-card-section.font-size-large Вход в систему
        q-card-section
          .q-mb-md
            q-input(
              v-model.trim="form.login"
              label="Логин"
              placeholder="Имя пользователя или email"
              :rules="[ v => !!v || 'Введите логин' ]"
              lazy-rules
              :dark="false"
              hint="Подойдёт любой логин"
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
              hint="Подойдёт любой пароль"
            )
              template(#before)
                q-icon(name="lock")
              template(#append)
                q-icon.cursor-pointer(
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  @click="isPwd = !isPwd"
                )
        q-card-actions
          q-btn.self-center.bg-WB-primary.text-white.full-width(
            type="submit"
            :loading="$managerWB.user.loading.user"
            label="Войти"
          )
            template(#loading)
              q-spinner(size="20px")
              span загрузка...
</template>

<script>
export default {
  name: 'WBManagerProjectLogin',
  data () {
    return {
      form: {
        login: 'test@test.test',
        password: '~Test123'
      },
      isPwd: true
    }
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
