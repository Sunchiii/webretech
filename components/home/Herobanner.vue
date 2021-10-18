<template>
  <div>
    <v-container class="my-sm-10">
      <v-row>
        <v-col cols="12" sm="5" md="5" class=" d-flex flex-column justify-center fade-in">
          <div class="teal--text text--lighten-1 d-flex flex-column align-center align-sm-start">
            <div class="title mx-1">The</div>
            <div class="textHero font-weight-bold">BUSINESS</div>
            <div class="textHero font-weight-bold">PROFILE.</div>
            <div class="subtitle ">" We Trive To Change "</div>
            <v-btn color="#00999e" class="rounded-xl ma-5" outlined>Our Product</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="7" md="7" class="fade-in">
            <div class="widt">
                <v-img :src="HeroBanner" contain></v-img>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            HeroBanner:require('../../assets/image/hero_banner.avif')
        }
    },
}
</script>

<style scoped>
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }


.textHero{
   font-size: 6rem;
   line-height: 5.5rem;
   letter-spacing: -0.015625em;
 }
 .widt{
     width: 100%;
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






 @media only screen and (max-width: 1024px){
    .textHero{
        font-size: 5rem;
    }
@media only screen and (max-width: 960px){
    .textHero{
        font-size: 4rem;
    }
    /* .widt{
        width: 80%;
    } */
}
@media only screen and (max-width: 600px){
    .textHero{
       font-size: 3.5rem;
       line-height: 3rem;
    }
}
}
</style>