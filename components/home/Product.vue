<template>
    <div class="background white--text pt-10">
        <v-container class="pa-0">
            <div>
                <div class="subtitle-1 text-center mb-5">Product Sample</div>
                <v-carousel v-model="carousel" hide-delimiter-background interval="5000" cycle show-arrows-on-hover>
                    <v-carousel-item><Item1 /></v-carousel-item>
                </v-carousel>
            </div>
        </v-container>
    </div>
</template>
<script>
import Item1 from '../home/ProductItem/Retechapp.vue'
export default {
    components:{
     Item1
    },
    data() {
        return {
            carousel:0
        }
    },
}
</script>
<style scoped>
.background{
    background-color: #00999e;
}
</style>