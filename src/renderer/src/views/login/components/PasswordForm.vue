<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { captchaImage, loginByJson } from '@api/login'


interface RuleForm {
  password: string //密码（需要使用AES加密）
  username: string //用户名（需要使用AES加密）
  key: string //图形验证码中随机UUID
  captcha: string
}

const captchaUrl = ref<string>('')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  captcha: '',
  key: '',
  username: '',
  password: ''
})

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, message: '用户名长度不能小于3位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ],
  captcha: {
    required: true,
    message: '请输入验证码',
    trigger: 'blur'
  }
})

//生命周期
onBeforeMount(() => {
  getCaptcha()
})

const getCaptcha = async () => {
  const key = new Date().getTime().toString()
  ruleForm.key = key
  const res = await captchaImage({
    key
  })
  const blob = new Blob([res], { type: 'application/vnd.ms-excel' })
  captchaUrl.value = URL.createObjectURL(blob)
}

//点击登陆
const handleLogin = async () => {
  await ruleFormRef.value?.validate(async (isValid) => {
    if (isValid) {
      const res = await loginByJson({
        username: ruleForm.username,
        password: ruleForm.password,
        key: ruleForm.key,
        captcha: ruleForm.captcha
      })

      console.log(res)
    } else {
      console.log('没有通过校验')

    }
  })
}
</script>

<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="0" size="large">
    <el-form-item prop="username">
      <el-input
        v-model="ruleForm.username"
        placeholder="请输入用户名"
        prefix-icon="user"
        clearable
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="ruleForm.password"
        placeholder="请输入密码"
        prefix-icon="lock"
        show-password
        clearable
      />
    </el-form-item>
    <el-form-item prop="captcha">
      <div class="box-code">
        <el-input
          v-model="ruleForm.captcha"
          placeholder="请输入验证码"
          clearable
          prefix-icon="circle-check"
        />
        <el-image class="code" :src="captchaUrl" @click="getCaptcha" />
      </div>
    </el-form-item>
    <div class="remember">
      <div>
        <el-checkbox label="记住密码"></el-checkbox>
      </div>
      <div>
        <el-link type="primary" href="https://www.baidu.com">忘记密码</el-link>
      </div>
    </div>


    <el-form-item>
      <el-button type="primary" round style="width: 100%" @click="handleLogin"> 登陆</el-button>
    </el-form-item>

  </el-form>
</template>

<style scoped>
.box-code {
  display: flex;
  align-items: center;
  width: 100%;
}

.box-code .code {
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
}

.remember {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

}
</style>
