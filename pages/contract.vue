<template>
    <div>
        <Herotitle />
        <Map />
    </div>
</template>
<script>
import Herotitle from '../components/contract/Herotitle.vue'
import Map from '../components/contract/Cardinfo.vue'
export default {
    layout:'topandfoot',
    components:{
        Herotitle,
        Map
    }
}
</script>