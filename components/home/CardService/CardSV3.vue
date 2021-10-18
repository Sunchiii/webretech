<template>
    <div style="height:100%;">
        <v-card class="rounded-xl py-5 px-5">
            <div>
                <div class="d-flex justify-center">
                    <v-img :width="wh" :height="wh"  :src="Logo" contain></v-img>
                </div>
                <div>
                    <div>{{title}}</div>
                </div>
                <div>
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
            Logo:require('../../../assets/image/CardSV/marketing.webp'),
            title:'System Development',
            subtitle:'Unable to write into user settings. Please open the user settings to correct errors/warnings in it and try again.',
        }
    },
}
</script>