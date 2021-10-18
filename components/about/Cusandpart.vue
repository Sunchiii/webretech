<template>
  <div class="teal--text">
    <v-container>
      <div class="display-3 text-center">Our</div>
      <div class="display-3 text-center">Customer & Partner</div>
      <v-row class="my-10">
        <v-col v-for="item in picture" :key="item.pic" cols="6" md="2">
          <v-img :src="item.pic" height="100%" contain></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picture: [
        { pic: require('../../assets/image/customXpartner/upskill_banner.avif') },
        { pic: require('../../assets/image/customXpartner/bcs_banner.avif') },
        {
          pic: require('../../assets/image/customXpartner/systory_banner.avif'),
        },
        {
          pic: require('../../assets/image/customXpartner/hostinger_banner.avif'),
        },
        { pic: require('../../assets/image/customXpartner/rope_banner.avif') },
        { pic: require('../../assets/image/customXpartner/back.avif') },
        { pic: require('../../assets/image/customXpartner/hss.avif') },
        { pic: require('../../assets/image/customXpartner/kolao.avif') },
        { pic: require('../../assets/image/customXpartner/pks.avif') },
        {
          pic: require('../../assets/image/customXpartner/sueksakila.avif'),
        },
      ],
    }
  },
}
</script>