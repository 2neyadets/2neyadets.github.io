<template lang="pug">
  q-page.bg-blue-grey-2.flex.justify-center.items-center.row
    q-form.col-xs-12.col-sm-8.col-md-6.col-lg-3(@submit.prevent="doLogin")
      q-card.bg-white.text-black
        q-card-section.font-size-large Вход в систему
        q-card-section
          q-input(
            v-model.trim="form.login"
            label="Логин"
            color="WB-primary"
            float-label
            placeholder="Имя пользователя или email"
            :error="$v.form.login.$error"
            error-message="Поле не может быть пустым"
            :dark="false"
            hint="Подойдёт любой пароль"
          )
            template(slot="before")
              q-icon(name="account_box")
          q-input(
            v-model="form.password"
            :type="isPwd ? 'password' : 'text'"
            label="Пароль"
            color="WB-primary"
            float-label
            placeholder="Пароль"
            autocomplete="off"
            :error="$v.form.password.$error"
            error-message="Поле не может быть пустым"
            :dark="false"
            hint="Подойдёт любой пароль"
          )
            template(slot="before")
              q-icon(name="lock")
            template(slot="append")
              q-icon.text-lg(
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              )
        q-card-actions
          q-btn.self-center.text-white.full-width(
            :disable="$v.$error || $operatorWB.user.loading.user"
            type="submit"
            :loading="$operatorWB.user.loading.user"
            color="WB-primary"
            label="Войти"
            :dark="false"
          )
            template(#loading)
              q-spinner(size="20px")
              span загрузка...
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'WBOperatorProjectLogin',
  data () {
    return {
      form: {
        login: 'test@test.test',
        password: '~Test123'
      },
      isPwd: true
    }
  },
  validations: {
    form: {
      login: { required },
      password: { required }
    }
  },
  methods: {
    doLogin () {
      this.$v.form.$touch()
      if (!this.$v.form.$invalid) {
        this.$operatorWB.user.login({
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
