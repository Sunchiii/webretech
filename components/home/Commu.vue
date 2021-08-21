<template>
  <div class="my-12">
    <v-container>
      <div>
        <v-card class="rounded-xl cyan--text lighten-1 py-5 px-12">
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column justify-center">
              <div class="d-flex flex-column align-center align-md-start">
                <div class="title">Our</div>
                <div class="font-size">COMMUNITIES</div>
                <div class="font-size">& FANPAGE.</div>
                <div class="caption text-align">
                  We believe that having a good community will lead us to better
                  consult and find solutions and get the good information we
                  need.
                </div>
                <div class="caption text-align">And we recommend the community that we have is</div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
               <div class="picWidth">
                   <div><v-img :src="stack"></v-img></div>
                   <div class="d-flex justify-center jusfity-md-start">
                     <span class="wh"><v-img :src="retech" contain></v-img></span>
                     <span class="wh"><v-img :src="champa" contain></v-img></span>
                   </div>
               </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            stack:require('../../assets/image/stack_pic.PNG'),
            retech:require('../../assets/image/retech.png'),
            champa:require('../../assets/image/champa.jpg')
        }
    },
}
</script>
<style scoped>
.picWidth{
  width: 40%;
}
.wh{
  width: 100px;
}
.text-align{
  text-align: start;
}
.font-size{
  font-size: 3.5rem;
  line-height: 3rem;
}

 /* @media only screen and (max-width: 1024px){
    } */
@media only screen and (max-width: 960px){
  .text-align{
    text-align: center;
  }
}
@media only screen and (max-width: 600px){
    .font-size{
        font-size: 2.5rem;
        line-height: 2.5rem;
    }
    .wh{
      width: 80px;
    }
}
</style>