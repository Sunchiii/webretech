<template>
  <div class="white--text">
    <v-row no-gutters>
      <v-col cols="12" sm="6" class="d-flex justify-center justify-sm-start">
        <div class="sizeIm">
          <v-img :src="RTapp"></v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="px-md-0 px-1">
        <div>
          <div class="font-size font-weight-bold text-align">Retech.Sole</div>
          <div class="subtitle-1 text-align">
            application for new prospects in finding information, learning and
            skills and want to make product software or be a POS to manage in
            bussiness and other uses as needed
          </div>
          <div class="subtitle-1 text-align">
            We enable your business to leverage the benefits of IT consulting
            and software development services that adapt
          </div>
          <div class="ma-12 d-flex">
              <v-card width="150" class="rounded-xl px-5 py-1 bb">
                  <v-row no-gutters>
                      <v-col cols="4"><v-img :src="icon" width="30"></v-img></v-col>
                      <v-col cols="8">
                          <div style="font-size:8px;color:white;">Download on the</div>
                          <div style="font-size:12px;color:white;">Google Play</div>
                      </v-col>
                  </v-row>
              </v-card>
              <v-card width="150" class="rounded-xl mx-10 px-5 py-1 bb">
                  <v-row no-gutters>
                      <v-col cols="4"><v-img :src="iconapple" width="30"></v-img></v-col>
                      <v-col cols="8">
                          <div style="font-size:8px;color:white;">Download on the</div>
                          <div style="font-size:12px;color:white;">Google Play</div>
                      </v-col>
                  </v-row>
              </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RTapp: require('../../../assets/image/slideProduct/sunasa02.png'),
      icon: require('../../../assets/image/slideProduct/google_play.png'),
      iconapple: require('../../../assets/image/slideProduct/apple_icon.png')
    }
  },
}
</script>
<style scoped>
.bb{
    background-color: #000;
}
.sizeIm{
    width: 80%;
}
.font-size{
    font-size: 3rem;
    line-height: 3rem;
}
.font-size-cap{
    font-size: 2rem;
    line-height: 2rem;
}
.text-align{
    text-align: start;
}
/* @media only screen and (max-width: 1024px){
    } */
@media only screen and (max-width: 960px){
    .sizeIm{
        width: 100%;
    }
}
@media only screen and (max-width: 600px){
    .sizeIm{
        width: 60%;
    }
.font-size{
    font-size: 2rem;
    line-height: 2rem;
}
    .font-size-cap{
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
    .text-align{
        text-align: center;
    }
}
</style>