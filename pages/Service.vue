<template>
  <div >
    <div class="topser d-flex flex-column justify-center">
      <div class="display-2 white--text my-5">Our Service</div>
      <div class="subtitle white--text">
        We are a creative company that focuses on
      </div>
      <div class="subtitle white--text">
        establishing long-term relationships with customers.
      </div>
    </div>
    <v-container class="my-12">
      <v-row class="teal--text text--lighten-1">
        <v-col cols="12" md="6">
          <div>
            <div class="font-weight-bold caption">WHAT WE DO?</div>
          </div>
          <div class="display-2 my-5">
            The service we offer is specifically designed to meet your needs.
          </div>
          <div class="subtitle-2">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Maecenas sed diam eget risus varius blandit sit amet non
            magna. Maecenas faucibus mollis interdum. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.
          </div>
        </v-col>
        <v-col cols="12" md="6"></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: 'topandfoot',
  data() {
    return {}
  },
}
</script>
<style scoped>
.topser {
  background-image: url('../assets/image/Service/tt.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  text-align: center;
}
</style>