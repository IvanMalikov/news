<template>
  <div class="flex items-center">
    <div class="container mt-[53px] mb-[5px] ml-28 xl:mx-auto">
      <p class="font-light text-2xl pt-[36px] mb-[29px] xl:mb-[26px] xl:text-xl">Welcome !</p>
      <p class="font-medium text-3xl xl:text-2xl">Sign in to</p>
      <p class="font-normal text-base pb-[48px] xl:pb-[42px]">Lorem Ipsum is simply </p>
      <form @submit.prevent="onSubmit" class="mb-[56px] xl:mb-[31px]">
        <div class="mb-[38px] border-darkred">
          <InputComponent
            label="Email"
            v-model="username"
            :error-message="uError"
            placeholder="Enter your email"
            type="text"
            id="username"
            :blur="uBlur"
          />
        </div>
        <div class="mb-[23px] relative">
          <img
            class="absolute right-[20px] top-[54px] z-10"
            @click="toggleShowPassword"
            src="../../assets/images/hide-password.png"
          >
          <InputComponent
            v-if="!showPassword"
            v-model="password"
            :error-message="pError"
            label="Password"
            placeholder="Enter your Password"
            type="password"
            id="password"
            :blur="pBlur"
          />
          <InputComponent
            v-else
            v-model="password"
            :error-message="pError"
            label="Password"
            placeholder="Enter your Password"
            type="text"
            id="password"
            :blur="pBlur"
          />
        </div>
        <div class="flex justify-between items-center mb-[38px] font-light">
          <div class="flex items-center gap-x-2.5">
            <input type="checkbox" id="remember" class="w-[15px] h-[15px] border-black">
            <label for="remember" class="text-xs">Remember me</label>
          </div>
          <a href="#" class="text-xs">Forgot Password ?</a>
        </div>
        <button
          type="submit"
          class="w-full bg-black text-white font-medium py-[17px] rounded-input"
          :disabled="isSubmitting"
        >Login</button>
      </form>
      <div class="flex justify-center mb-[40px] relative xl:mb-[34px]">
        <p v-if="authErrorMessage" class="auth-error-message">{{authErrorMessage}}</p>
        <a @click.prevent href="#" class="font-light text-gray xl:text-xs">Don’y have an Account ?  <span class="font-semibold text-black" @click="$emit('changeFlag', 'up')">Register</span></a>
      </div>
    </div>
    <img class="xxl:w-2/4 xl:hidden" src="../../assets/images/small-team.png" alt="">
  </div>
</template>

<script>
import { useLoginForm } from '@/use/login-form'
import InputComponent from '@/components/ui/InputComponent'
export default {
  components: { InputComponent },
  setup () {
    return { ...useLoginForm() }
  }
}
</script>
