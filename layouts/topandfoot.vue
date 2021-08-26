<template>
  <v-app>
    <div class="top">
      <v-container class="pt-0 pb-0">
        <v-row no-gutters>
          <v-col cols="10" sm="7" md="8" class="d-flex align-center">
            <v-tooltip>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  :color="Topwhite"
                  :size="TopiconSize"
                  v-on="on"
                  v-bind="attrs"
                  >mdi-map-marker-radius-outline</v-icon
                >
              </template>
              <span>Retech sole.Co.Ltd/Phontong</span>
            </v-tooltip>
            <span class="subtitle-2 tColorwhite d-none d-sm-flex">
              Retech sole.Co.Ltd/Phontong
            </span>
          </v-col>
          <v-col cols="1" sm="2" class="d-flex justify-end align-center">
            <v-tooltip>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  :color="Topwhite"
                  :size="TopiconSize"
                  v-on="on"
                  v-bind="attrs"
                  >mdi-phone-in-talk</v-icon
                >
              </template>
              <span>020 96059 236</span>
            </v-tooltip>
            <span class="tColorwhite subtitle-2 d-none d-sm-flex"
              >020 96059 236</span
            >
          </v-col>
          <v-col cols="1" sm="3" md="2" class="d-flex justify-end align-center">
            <v-tooltip>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  :color="Topwhite"
                  :size="TopiconSize"
                  v-bind="attrs"
                  v-on="on"
                  >mdi-email</v-icon
                >
              </template>
              <span>kataiy@retech.com</span>
            </v-tooltip>
            <span class="tColorwhite subtitle-2 d-none d-sm-flex"
              >kataiy@retech.com</span
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- ^ top bar ^ -->

    <div class="backColor">
      <Toolbar />
    </div>

    <v-main>
      <Nuxt />
    </v-main>






    <div id="menuMB" class=" d-flex d-md-none">
        <v-bottom-navigation
          fixed
          horizontal
          scroll-target="#hide-on-scroll-example"
        >
          <v-btn color="#00999e" text to="/">
            <span class="d-none d-sm-flex">Home</span>
            <v-icon class="mx-1">mdi-home</v-icon>
          </v-btn>

          <v-btn color="#00999e" text to="/Product">
            <span class="d-none d-sm-flex">Product</span>
            <v-icon  class="mx-1">mdi-check-decagram</v-icon>
          </v-btn>

          <v-btn color="#00999e" text to="/Service">
            <span class="d-none d-sm-flex">Service</span>
            <v-icon  class="mx-1">mdi-braille</v-icon>
          </v-btn>

          <v-btn color="#00999e" text>
            <span class="d-none d-sm-flex">About</span>
            <v-icon  class="mx-1">mdi-account-group</v-icon>
          </v-btn>
        </v-bottom-navigation>
    </div>

    <div class="fColor block">
      <Footer />
    </div>
    <div class="overline text-center">@CopyRight Retech sole.Co.Ltd</div>
    <div class="d-flex d-md-none" style="height: 60px;"></div>
  </v-app>
</template>
<script>
import Toolbar from '../components/Toolbar.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Toolbar,
    Footer,
  },
  data() {
    return {
      TopiconSize: 20,
      Topwhite: 'white',
      Logo: require('~/assets/image/retech.png'),
    }
  },
}
</script>
<style scoped>
.block {
  display: block;
}
.inline {
  display: inline;
}
.top {
  height: 25px;
  width: 100%;
  background-color: #00999e;
}
.navbar {
  height: 50px;
}
.tColorwhite {
  color: white;
}
.backColor {
  background-color: white;
}
.fColor {
  background-color: #00999e;
}
</style>