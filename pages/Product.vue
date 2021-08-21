<template>
    <div>
        <v-container>
            <div class="text-center teal--text text--lighten-1">
                <div class="title">Our Product</div>
                <div class="subtitle-2">Check out some of our awesome projects</div>
                <div class="subtitle-2">with creative ideas and great design.</div>
                <div class="my-10"><Show /></div>
            </div>
        </v-container>
    </div>
</template>

<script>
import Show from '../components/Product/Cardshow.vue'
export default {
    layout:'topandfoot',
    components:{
       Show 
    }
}
</script>