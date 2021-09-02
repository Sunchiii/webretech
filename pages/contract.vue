<template>
    <div>
        <Herotitle />
        <Map />
        <Inbox />
    </div>
</template>
<script>
import Herotitle from '../components/contract/Herotitle.vue'
import Map from '../components/contract/Cardinfo.vue'
import Inbox from '../components/contract/Inbox.vue'
export default {
    layout:'topandfoot',
    components:{
        Herotitle,
        Map,
        Inbox
    }
}
</script>