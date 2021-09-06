<template>
  <div>
    <Hero />
    <Discript />
    <Team />
  </div>
</template>
<script>
import Hero from '../components/about/Herotitle.vue'
import Discript from '../components/about/Discription.vue'
import Team from '../components/about/Team.vue'
export default {
  layout: 'topandfoot',
  components: {
    Hero,
    Discript,
    Team
  },
}
</script>