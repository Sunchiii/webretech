<template>
  <div >
    <Hero />
    <v-container class="my-12">
      <Cate />
    </v-container>
    <Sysdev />
    <Train />
    <Tech />
    <Instant />
  </div>
</template>
<script>
import Hero from '../components/Service/Herobanner'
import Cate from '../components//Service/Categor'
import Sysdev from '../components/Service/Sysdev.vue'
import Train from '../components/Service/Trainning.vue'
import Tech from '../components/Service/Techmarket.vue'
import Instant from '../components/Service/Instant.vue'
export default {
  layout: 'topandfoot',
  components:{
    Hero,
    Cate,
    Sysdev,
    Train,
    Tech,
    Instant
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
</style>