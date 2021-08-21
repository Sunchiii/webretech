<template>
  <div class="background white--text text-center py-10">
    <v-container>
      <div>
        <div class="caption">WHAT WE WORK?</div>
        <div class="title">The Service We Offer Is Specifically</div>
        <div class="title">Designed To Meet You Neet.</div>
      </div>
      <v-row class="my-5">
        <v-col cols="12" md="3"><CardSV /></v-col>
        <v-col cols="12" md="3"><CardSV /></v-col>
        <v-col cols="12" md="3"><CardSV /></v-col>
        <v-col cols="12" md="3"><CardSV /></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CardSV from './CardService/CardSV.vue'
export default {
  components: {
    CardSV,
  },
}
</script>
<style scoped>
.background {
  background-color: #00999e;
}






.fade-in {
    opacity:0;
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;

    -webkit-animation-fill-mode:forwards; 
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration:1s;
    -moz-animation-duration:1s;
    animation-duration:1s;
}
</style>