<template>
  <div class="white--text">
    <v-row no-gutters>
      <v-col cols="12" sm="6" class="d-flex justify-center justify-sm-start">
        <div class="sizeIm">
          <v-img :src="RTapp"></v-img>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="px-md-0 px-1">
        <div class="d-flex flex-column justify-center" style="height:100%;">
          <div class="font-size font-weight-bold text-align">ReTech Sole Co.,Ltd</div>
          <div class="subtitle-1 text-align"> This is the main fan page of the company you can contact and talk to us directly. which we are always ready To make you impressed with our services.application for new prospects in finding information, learning and
            skills and want to make product software or be a POS to manage in
            bussiness and other uses as neede
          </div>
          <div class="ma-12 d-flex">
              <div>
                  <a href="https://web.facebook.com/retechsole" class="white--text" target="_blan"><span class="d-flex align-center rounded-xl overflow-hidden pa-2" style="border:1px solid;"><v-img :src="facebook" width="50"></v-img><span class="mx-2"> <\ click to see Our facebook fan page</span></span></a>
              </div>
              <!-- <v-card width="150" class="rounded-xl px-5 py-1 bb">
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
                  </v-row> -->
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
      icon: require('../../../assets/image/slideProduct/google_play.avif'),
      iconapple: require('../../../assets/image/slideProduct/apple_icon.avif'),
      facebook: require('../../../assets/image/slideProduct/facebookicon.webp')
    }
  },
}
</script>
<style scoped>
.bb{
    background-color: #000;
}
.bg-teal{
  background-color: #00999e;
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