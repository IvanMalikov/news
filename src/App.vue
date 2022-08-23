<template>
  <component :is="layout" v-if="layout"></component>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import LoginLayout from './layouts/LoginLayout'
import MainLayout from './layouts/MainLayout'

export default {
  setup () {
    const route = useRoute()
    const layout = computed(() => route.meta.layout)
    return {
      layout
    }
  },
  components: { MainLayout, LoginLayout }
}
</script>

<style lang="scss">

</style>
