<template>
  <LayoutWrapper>
    <router-view />
  </LayoutWrapper>
</template>

<script>
import LayoutWrapper from './components/LayoutWrapper.vue'

export default {
  components: { LayoutWrapper }
}
</script>
