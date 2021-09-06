<template>
  <div>
    <Hero />
    <Discript />
    <Team />
    <ST />
  </div>
</template>
<script>
import Hero from '../components/about/Herotitle.vue'
import Discript from '../components/about/Discription.vue'
import Team from '../components/about/Team.vue'
import ST from '../components/about/Showtask.vue'
export default {
  layout: 'topandfoot',
  components: {
    Hero,
    Discript,
    Team,
    ST
  },
}
</script>