<template>
    <div style="height:100%;">
        <v-card class="rounded-xl py-5 px-5" height="100%">
            <div>
                <div class="d-flex justify-center">
                    <v-img :width="wh" :height="wh"  :src="Logo" contain></v-img>
                </div>
                <div>
                    <div>{{title}}</div>
                </div>
                <div class="overflow-hidden">
                    <div>{{subtitle}}</div>
                </div>
                <div>
                    <v-btn color="#00999e" class="white--text rounded-xl">READ MORE</v-btn>
                </div>
            </div>
        </v-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            wh:50,
            Logo:require('../../../assets/image/CardSV/sysdev.webp'),
            title:'System Development',
            subtitle:'We enable your business to leverage the benefits of IT development services that adapt seamlessly to your project requirements ',
        }
    },
}
</script>