<template>
  <div class="flex justify-around py-5 border-border">
    <router-link to="/">Home</router-link>
    <router-link to="/news">News</router-link>
    <router-link to="/profile">Profile</router-link>
    <a href="#" @click.prevent="onLogout">Logout</a>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    const router = useRouter()
    const state = useStore()
    const onLogout = () => {
      state.commit('auth/logout')
      router.push('/login')
    }

    return {
      onLogout
    }
  }
}
</script>

<style scoped>

</style>
