<template>
  <div class="flex items-center">
    <div class="container mt-[28px] mb-[7px] ml-28 xl:mx-auto">
      <p class="font-light text-2xl pt-[14px] mb-[10px] xl:pt-[25px] xl:text-xl">Welcome !</p>
      <p class="font-medium text-3xl xl:text-2xl">Sign up to</p>
      <p class="font-normal text-base mb-[26px] xl:mb-[31px]">Lorem Ipsum is simply </p>
      <form @submit.prevent class="mb-[20px] xl:mb-[30px]">
        <div class="mb-[24px]">
          <InputComponent
            v-model="email"
            label="Email"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-[24px]">
          <InputComponent
            v-model="username"
            label="User name"
            type="text"
            placeholder="Enter your user name"
          />
        </div>
        <div class="mb-[24px] relative">
          <img
            class="absolute right-[20px] top-[54px] z-10"
            src="../../assets/images/hide-password.png"
          >
          <InputComponent
            v-model="password"
            label="Password"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <div class="mb-[31px] relative">
          <img
            class="absolute right-[20px] top-[54px] z-10"
            src="../../assets/images/hide-password.png"
          >
          <InputComponent
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your Password"
          />
        </div>
        <button type="submit" class="w-full bg-black text-white font-medium py-[17px] rounded-input">Register</button>
      </form>
      <div class="flex justify-center mb-[25px]">
        <a href="#" class="font-light text-gray xl:text-xs">Already have an Account ?  <span class="font-semibold text-black" @click="$emit('changeFlag', 'in')">Log in</span></a>
      </div>
    </div>
    <img class="xxl:w-2/4 xl:hidden" src="../../assets/images/small-team.png" alt="">
  </div>
</template>

<script>
import { ref } from 'vue'
import InputComponent from '@/components/ui/InputComponent'
export default {
  components: { InputComponent },
  setup () {
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const username = ref('')

    return {
      email,
      username,
      password,
      confirmPassword
    }
  }
}
</script>
