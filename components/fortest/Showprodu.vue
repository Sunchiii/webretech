<template>
   <div> 
      <v-container>
         <div class="d-flex flex-column flex-md-row align-center">
            <div class="left"><v-img :src="pic" contain></v-img></div>
            <div class="right"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam soluta ad odit iste ut ea, facere veritatis hic temporibus amet, rerum facilis deserunt maiores eveniet magnam sunt dolorum libero. Temporibus!</p></div>
         </div>
      </v-container>
   </div>
</template>

<script>
export default {
   data() {
      return {
         pic:require('../../assets/image/Product/sunasa02.png')
      }
   },
}
</script>

<style scoped>
 .zIndex{
    z-index: 5;
 }
 .left{
    width: 60%;
    border: 1px solid;
    z-index: 1;
 }
 .right{
  border: 1px solid;
  margin-left: -100px;
  margin-right: -100px;
  z-index: 2;
  background-color: tomato;
 }

 @media only screen and (max-width:800px) {
  .right{
     margin: 0;
  }
}
/* @media only screen and (max-width:500px) {
  } */
</style>