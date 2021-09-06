<template>
<div>
    <div id="navbar">
      <v-container class="pt-0 pb-0 F">
        <v-row>
          <v-col cols="6" md="2">
            <Nuxt-link to="/"><v-img :src="Logo" height="50" width="100" contain></v-img></Nuxt-link>
          </v-col>
          <v-col cols="6" md="8" class="d-none d-md-flex">
            <template>
              <v-tabs v-model="menutab" color="#00999e" centered optional >
                <v-tabs-slider color="#00999e"></v-tabs-slider>
                <v-tab  to="/"><v-icon size="20" class="mx-1">mdi-home</v-icon> Home</v-tab>
                <v-tab to="/Product"><v-icon size="20" class="mx-1">mdi-check-decagram</v-icon> Product</v-tab>
                <v-tab to="/Service"><v-icon size="20" class="mx-1">mdi-braille</v-icon> Service</v-tab>
                <v-tab to="/about"><v-icon size="20" class="mx-1">mdi-account-group</v-icon> About</v-tab>
              </v-tabs>
            </template>
          </v-col>
          <v-col cols="6" md="2" class="d-flex align-center justify-end ">
            <!-- <v-menu >
              <template v-slot:activator="{on, attrs}">
                <v-btn
                 v-on="on"
                 v-bind="attrs"
                 class="mx-1 elevation-0 d-flex d-md-none"
                 color="white"
                 ><v-icon>mdi-apps</v-icon><v-icon>mdi-chevron-down</v-icon></v-btn>
              </template>
              <v-list>
                <v-list-item to="">
                  <v-list-item-title>Home</v-list-item-title>
                  <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
                </v-list-item>
                <v-list-item to="">
                  <v-list-item-title>Product</v-list-item-title>
                  <v-list-item-icon><v-icon>mdi-check-decagram</v-icon></v-list-item-icon>
                </v-list-item>
                <v-list-item to="">
                  <v-list-item-title>Service</v-list-item-title>
                  <v-list-item-icon><v-icon>mdi-braille</v-icon></v-list-item-icon>
                </v-list-item>
                <v-list-item to="">
                  <v-list-item-title>About</v-list-item-title>
                  <v-list-item-icon><v-icon>mdi-account-group</v-icon></v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-menu> -->
              <v-btn color="#00999e" class="white--text rounded-xl" to="/contract">Contact</v-btn>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>
        <div id="bb" class="none"></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      TopiconSize: 20,
      Topwhite: 'white',
      Logo: require('~/assets/image/retech.png'),
      height: 50,
      menutab: null,
    }
  },
  created() {
    if (process.client) {
      this.nb()
    }
  },
  methods: {
    nb() {
      window.onscroll = function () {
        myFunction()
      }
      var bb = document.getElementById('bb')
      var navbar = document.getElementById('navbar')
      var sticky = navbar.offsetTop

      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add('sticky')
          bb.classList.add('boxback')
        } else {
          navbar.classList.remove('sticky')
          bb.classList.remove('boxback')
        }
      }
    },
  },
}
</script>
<style scoped>
#navbar {
  overflow: hidden;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 5;
}
.none {
  display: none;
}
.boxback {
  display: block;
  height: 50px;
}

.inline {
  display: inline;
}
.tColorwhite {
  color: white;
}
</style>