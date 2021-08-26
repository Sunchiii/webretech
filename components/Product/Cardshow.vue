<template>
  <div class="d-flex flex-md-row flex-column align-center justify-center">
    <div class="bleft">
    <v-card color="#7fccce" elevation="0" class="rounded-xl ">
      <div ><v-img :src="mb1" contain></v-img></div>
    </v-card>
    </div>
    <div class="bright ml-md-n10 ml-0">
      <v-card
        class="
          rounded-xl
          d-flex
          flex-column
          align-start
          px-12
          py-10
          teal--text
          text--lgihten-1
        "
        width="500"
      >
        <div class="overline">- Mobile application product</div>
        <div class="title">Retech sole</div>
        <div class="caption" style="text-align: start">
          App plication for Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id
          nibh ultricies vehicula.
        </div>
        <div class="caption" style="text-align: start">
          eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies
          vehicula.
        </div>
        <div class="my-2 d-flex flex-md-row flex-column wit justify-md-space-around align-center">
          <v-card width="150" class="rounded-xl px-5 py-1 bb my-2 my-md-0">
            <v-row no-gutters>
              <v-col cols="4"><v-img :src="icon" width="30"></v-img></v-col>
              <v-col cols="8">
                <div style="font-size: 8px; color: white">Download on the</div>
                <div style="font-size: 12px; color: white">Google Play</div>
              </v-col>
            </v-row>
          </v-card>
          <v-card width="150" class="rounded-xl px-5 py-1 bb">
            <v-row no-gutters>
              <v-col cols="4"
                ><v-img :src="iconapple" width="30"></v-img
              ></v-col>
              <v-col cols="8">
                <div style="font-size: 8px; color: white">Download on the</div>
                <div style="font-size: 12px; color: white">Google Play</div>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mb1: require('../../assets/image/Product/sunasa02.png'),
      icon: require('../../assets/image/slideProduct/google_play.png'),
      iconapple: require('../../assets/image/slideProduct/apple_icon.png'),
    }
  },
}
</script>

<style scoped>
.wit{
  width: 100%;
}
.bleft{
  width: 40%;
}
.bright {
  width: 40%;
}
.text-align {
  text-align: end;
}
.bb{
    background-color: #000;
}

@media only screen and (max-width:800px) {
  
}
@media only screen and (max-width:600px) {
  .bleft{
    width: 100%;
  }
  .bright{
    width: 100%;
  }
  }









</style>