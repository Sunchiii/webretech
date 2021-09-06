<template>
  <div class="fColor white--text">
    <v-container>
      <div class="text-center my-5">
        <v-icon color="white" size="100">mdi-account-group</v-icon>
      </div>
      <div class="display-2 text-center">Save Your Time And Money By</div>
      <div class="display-2 text-center">Choosing Our Professional Team.</div>
      <v-row>
        <v-col cols="12" md="6" class="my-10">
          <v-row>
            <v-col cols="4">
              <div class="rounded-circle overflow-hidden elevation-3">
                <v-img :src="kataiy" contain></v-img>
              </div>
            </v-col>
            <v-col cols="8" class="d-flex flex-column justify-center">
              <div class="title font-weight-bold">Mr Kataiy Xaiyasombath</div>
              <div class="body-1">ChairMan</div>
              <div class="body-1">kataiy@retechsole.com</div>
              <div class="body-1">(856) 20 941 48 494</div>
              <div>
                <span
                  ><v-icon color="white" size="50">mdi-facebook</v-icon></span
                >
                <span
                  ><v-icon color="white" size="50">mdi-instagram</v-icon></span
                >
                <span
                  ><v-icon color="white" size="50">mdi-linkedin</v-icon></span
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="my-10">
          <v-row>
            <v-col cols="4">
              <div class="rounded-circle overflow-hidden elevation-3">
                <v-img :src="khanthanou" contain ></v-img>
              </div>
            </v-col>
            <v-col cols="8" class="d-flex flex-column justify-center">
              <div class="title font-weight-bold">Dr. khanthanou Luangxaisana</div>
              <div class="body-1">Adviser | Marketing</div>
              <div class="body-1">khunthanu@retechsole.com</div>
              <div class="body-1">(856) 20 941 48 494</div>
              <div>
                <span
                  ><v-icon color="white" size="50">mdi-facebook</v-icon></span
                >
                <span
                  ><v-icon color="white" size="50">mdi-instagram</v-icon></span
                >
                <span
                  ><v-icon color="white" size="50">mdi-linkedin</v-icon></span
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="my-10">
          <v-row>
            <v-col cols="4">
              <div class="rounded-circle overflow-hidden elevation-3">
                <v-img :src="kataii" contain width="100%"></v-img>
              </div>
            </v-col>
            <v-col cols="8" class="d-flex flex-column justify-center">
              <div class="title font-weight-bold">Mr. Khathaphone tamongsumunfxai</div>
              <div class="body-1">CTO | Mobile Developer</div>
              <div class="body-1">Kataii@retechsole.com</div>
              <div class="body-1">(856) 20 941 48 494</div>
              <div>
                <span
                  ><v-icon color="white" size="50">mdi-facebook</v-icon></span
                >
                <span
                  ><v-icon color="white" size="50">mdi-instagram</v-icon></span
                >
                <span
                  ><v-icon color="white" size="50">mdi-linkedin</v-icon></span
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="my-10">
          <v-row>
            <v-col cols="4">
              <div class="rounded-circle overflow-hidden elevation-3">
                <v-img :src="piti" contain ></v-img>
              </div>
            </v-col>
            <v-col cols="8" class="d-flex flex-column justify-center">
              <div class="title font-weight-bold">Mr. Piti PHUNTHASOMBATH</div>
              <div class="body-1">CTO |  Web Developer</div>
              <div class="body-1">piti@retechsole.com</div>
              <div class="body-1">(856) 20 941 48 494</div>
              <div>
                <span
                  ><v-icon color="white" size="50">mdi-facebook</v-icon></span
                >
                <span
                  ><v-icon color="white" size="50">mdi-instagram</v-icon></span
                >
                <span
                  ><v-icon color="white" size="50">mdi-linkedin</v-icon></span
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kataiy: require('../../assets/image/about/kataiy.jpg'),
      kataii: require('../../assets/image/about/kataii.jpg'),
      khanthanou: require('../../assets/image/about/khanthanou.jpg'),
      piti: require('../../assets/image/about/piti.jpg'),
    }
  },
}
</script>
<style scoped>
.fColor {
  background-color: #00999e;
}
</style>