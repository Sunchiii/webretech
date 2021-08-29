<template>
  <div >
    <Hero />
    <v-container class="my-12">
      <Cate />
    </v-container>
    <Sysdev />
    <Train />
  </div>
</template>
<script>
import Hero from '../components/Service/Herobanner'
import Cate from '../components//Service/Categor'
import Sysdev from '../components/Service/Sysdev.vue'
import Train from '../components/Service/Trainning.vue'
export default {
  layout: 'topandfoot',
  components:{
    Hero,
    Cate,
    Sysdev,
    Train
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
</style>