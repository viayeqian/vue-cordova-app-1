<template>
  <v-container>
    <v-layout
      column
      justify-center
      align-center
    >
      <v-flex>
        <v-img
          :src="require('../assets/logo.png')"
          aspect-ratio='1.0'
          width="200"
          text-xs-center
        />
        <div class="title mb-5">欢迎登录申贷洽谈系统</div>

      </v-flex>
    </v-layout>

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="user.name"
        :rules="user.rules"
        :error-messages="user.errorMsg"
        label="用户名"
        placeholder="请输入用户名"
        type="text"
        prepend-inner-icon="person"
        autofocus
        clearable
        required
      ></v-text-field>

      <!-- <v-text-field
        v-model="agent.num"
        :rules="agent.rules"
        :error-messages="agent.errorMsg"
        label="座席号"
        placeholder="请输入座席号"
        type="tel"
        prepend-inner-icon="keyboard_voice"
        clearable
        required
      ></v-text-field> -->

      <v-text-field
        v-model="pwd.password"
        :rules="pwd.rules"
        :error-messages="pwd.errorMsg"
        :append-icon="showPwd ? 'visibility_off' : 'visibility'"
        :type="showPwd ? 'text' : 'password'"
        @click:append="showPwd = !showPwd"
        label="密码"
        placeholder="请输入密码"
        prepend-inner-icon="lock"
        clearable
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        :loading="loading"
        @click="validate"
        color="info"
        my-3
        block
        large
        replace
        round
      >
        登 录
      </v-btn>

      <!-- <v-btn
      color="error"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
    </v-form>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    user: {
      name: '',
      rules: [v => !!v || '用户名不能为空'],
      errorMsg: ''
    },
    // agent: {
    //   num: '',
    //   rules: [v => !!v || '座席号不能为空'],
    //   errorMsg: ''
    // },
    pwd: {
      password: '',
      rules: [v => !!v || '密码不能为空'],
      errorMsg: ''
    },
    loading: false,
    showPwd: false,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.loading = true
        let loginForm = {
          username: this.user.name,
          // agent: this.agent.num,
          password: this.pwd.password
        }
        this.$store
          .dispatch('Login', loginForm)
          .then(() => {
            this.$router.push({ path: '/' }) // 登录成功之后重定向到首页
          })
          .catch(err => {
            this.$message.error(err) // 登录失败提示错误
          })
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style>
</style>
