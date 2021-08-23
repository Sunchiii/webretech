<template>
  <div >
    <Hero />
    <v-container class="my-12">
      <Cate />
    </v-container>
  </div>
</template>
<script>
import Hero from '../components/Service/Herobanner'
import Cate from '../components//Service/Categor'
export default {
  layout: 'topandfoot',
  components:{
    Hero,
    Cate
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
</style>