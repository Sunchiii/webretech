<template>
    <div>
        <Herobanner />
        <Service />
        <Workpro />
        <Product />
        <Commu />
        <Customer />
    </div>
</template>
<script>
import Herobanner from '../components/home/Herobanner.vue'
import Service from '../components/home/Service.vue'
import Workpro from '../components/home/Workpro.vue'
import Product from '../components/home/Product.vue'
import Commu from '../components/home/Commu.vue'
import Customer from '../components/home/Customer.vue'
export default {
  layout:'topandfoot',
  components:{
      Herobanner,
      Service,
      Workpro,
      Product,
      Commu,
      Customer
  }

}
</script>
<style>
    
</style>