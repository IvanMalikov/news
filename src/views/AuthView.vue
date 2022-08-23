<template>
  <div>
    <h1 class="font-semibold text-xl pl-[42px] pt-[31px] xl:pl-[26px] xl:pt-[18px] xl:text-lg">Your logo</h1>
    <component :is="componentName" @changeFlag="changeFlag"></component>
  </div>
</template>

<script>
import AuthenticationSignUp from '@/components/authentication/AuthenticationSignUp'
import AuthenticationSignIn from '@/components/authentication/AuthenticationSignIn'
import { computed, ref } from 'vue'

export default {
  setup () {
    const flag = ref('in')

    const componentName = computed(() => 'authentication-sign-' + flag.value)

    const changeFlag = (value) => {
      flag.value = value
    }

    return {
      componentName,
      changeFlag,
      flag
    }
  },
  components: { AuthenticationSignIn, AuthenticationSignUp }
}
</script>

<style scoped>

</style>
