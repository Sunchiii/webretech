<template>
    <div class="teal--text text-darkern-1 my-12">
        <v-container>
            <div class="title text-center mb-10">CUSTOMERS & PARTNERS</div>
            <v-row justify="center">
                <v-col md="4" cols="12" class="d-flex justify-center">
                    <div class="wid"><v-img :src="up" contain ></v-img></div>
                </v-col>
                <v-col md="4" cols="12" class="d-flex justify-center">
                    <div class="wid">
                        <v-img :src="bcs" contain ></v-img>
                    </div>
                </v-col>
                <v-col md="4" cols="12" class="d-flex justify-center">
                    <div class="wid">
                        <v-img :src="systory" contain></v-img>
                    </div>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col md="4" cols="12" class="d-flex justify-center">
                    <div class="wid"><v-img :src="histing" contain></v-img></div>
                </v-col>
                <v-col md="4" cols="12" class="d-flex justify-center">
                    <div class="wid">
                        <v-img :src="kidbright" contain></v-img>
                    </div>
                </v-col>
                <v-col md="4" cols="12" class="d-flex justify-center">
                    <div class="wid">
                        <v-img :src="rope" contain></v-img>
                    </div>
                </v-col>
            </v-row>
            <div class="text-center my-12">
                <v-btn color="#2EA6AA" class="white--text rounded-xl pa-6 " elevation="0" width="300">SEE MORE</v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            up:require('../../assets/image/customXpartner/upskill_banner.avif'),
            bcs:require('../../assets/image/customXpartner/bcs_banner.avif'),
            systory:require('../../assets/image/customXpartner/systory_banner.avif'),
            histing:require('../../assets/image/customXpartner/hostinger_banner.avif'),
            kidbright:require('../../assets/image/customXpartner/kidbright_banner.avif'),
            rope:require('../../assets/image/customXpartner/rope_banner.avif')
        }
    },
}
</script>


<style scoped>
.wid{
    width: 60%;
}
</style>