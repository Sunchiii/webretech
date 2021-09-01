<template>
  <div >
    <Hero />
    <v-container class="my-12">
      <Cate />
    </v-container>
    <Sysdev />
    <Train />
    <Tech />
  </div>
</template>
<script>
import Hero from '../components/Service/Herobanner'
import Cate from '../components//Service/Categor'
import Sysdev from '../components/Service/Sysdev.vue'
import Train from '../components/Service/Trainning.vue'
import Tech from '../components/Service/Techmarket.vue'
export default {
  layout: 'topandfoot',
  components:{
    Hero,
    Cate,
    Sysdev,
    Train,
    Tech
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
</style>