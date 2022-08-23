<template>
  <div>
    <TheNavbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
export default {
  components: { TheNavbar }
}
</script>

<style scoped>

</style>
