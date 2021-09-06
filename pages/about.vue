<template>
  <div>
    <Hero />
    <Discript />
  </div>
</template>
<script>
import Hero from '../components/about/Herotitle.vue'
import Discript from '../components/about/Discription.vue'
export default {
  layout: 'topandfoot',
  components: {
    Hero,
    Discript
  },
}
</script>