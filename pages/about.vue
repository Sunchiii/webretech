<template>
  <div>
    <Hero />
    <Discript />
    <Team />
    <ST />
    <CP />

    <div class="my-10 teal--text text-center">
      <v-container>
        <div class="title">We are a digital and branding company that</div>
        <div class="title">believes in the power of creative strategy and along with great design.</div>
      </v-container>
    </div>
  </div>
</template>
<script>
import Hero from '../components/about/Herotitle.vue'
import Discript from '../components/about/Discription.vue'
import Team from '../components/about/Team.vue'
import ST from '../components/about/Showtask.vue'
import CP from '../components/about/Cusandpart.vue'
export default {
  layout: 'topandfoot',
  components: {
    Hero,
    Discript,
    Team,
    ST,
    CP
  },
}
</script>