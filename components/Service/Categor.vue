<template>
  <div>
    <v-row class="teal--text text--lighten-1">
      <v-col cols="12" md="6" class="d-flex align-center">
        <div>
        <div>
          <div class="font-weight-bold caption">WHAT WE DO?</div>
        </div>
        <div class="display-2 my-5">
          The service we offer is specifically designed to meet your needs.
        </div>
        <div class="subtitle-2">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Maecenas sed diam eget risus varius blandit sit amet non magna.
          Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et.
        </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
          <div>
              <v-row align="end" class="ml-5">
                  <v-col cols="12" md="5">
                      <v-card elevation="0" class="green lighten-5 pa-10 rounded-xl">
                          <div><v-img :src="market" width="50"></v-img></div>
                          <div class="title my-2">Marketing</div>
                          <div class="subtitle-1">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.</div>
                      </v-card>
                  </v-col>
                  <v-col cols="12" md="7">
                      <v-card elevation="0" class="pink lighten-5 pa-10 rounded-xl">
                          <div><v-img :src="pos" width="60"></v-img></div>
                          <div class="title my-2">Marketing</div>
                          <div class="subtitle-1">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.</div>
                      </v-card>
                  </v-col>
              </v-row>
              <v-row class="mr-5">
                  <v-col cols="12" md="7">
                      <v-card elevation="0" class="orange lighten-5 pa-10 rounded-xl">
                          <div><v-img :src="sysdev" width="50"></v-img></div>
                          <div class="title my-2">Marketing</div>
                          <div class="subtitle-1">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.</div>
                      </v-card>
                  </v-col>
                  <v-col cols="12" md="5">
                      <v-card elevation="0" class="cyan lighten-5 pa-10 rounded-xl">
                          <div><v-img :src="train" width="50"></v-img></div>
                          <div class="title my-2">Marketing</div>
                          <div class="subtitle-1">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.</div>
                      </v-card>
                  </v-col>
              </v-row>
          </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
    data(){
        return{
            market:require('@/assets/image/CardSV/marketing.png'),
            pos:require('@/assets/image/CardSV/pos.png'),
            sysdev:require('@/assets/image/CardSV/sysdev.png'),
            train:require('@/assets/image/CardSV/train.png')
        }
    }
}
</script>
<style scoped>
.carcCateColor{
    color:  #343f52;
}
</style>