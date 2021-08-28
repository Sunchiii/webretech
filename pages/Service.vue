<template>
  <div >
    <Hero />
    <v-container class="my-12">
      <Cate />
    </v-container>
    <Sysdev />
  </div>
</template>
<script>
import Hero from '../components/Service/Herobanner'
import Cate from '../components//Service/Categor'
import Sysdev from '../components/Service/Sysdev.vue'
export default {
  layout: 'topandfoot',
  components:{
    Hero,
    Cate,
    Sysdev
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
</style>