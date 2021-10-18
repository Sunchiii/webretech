<template>
    <div>
        <v-card class="rounded-xl teal--text py-5 px-5">
            <div>
                <div class="d-flex justify-center">
                    <v-img :width="wh" :height="wh"  :src="Logo" contain></v-img>
                </div>
                <div class="my-2 font-weight-bold">
                    <div>{{title}}</div>
                </div>
                <div>
                    <div class="subtitle-2">{{subtitle}}</div>
                </div>
                <div class="my-2">
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
            Logo:require('../../../assets/image/CardSV/pos.webp'),
            title:'Instant program',
            subtitle:'Unable to write into user settings. Please open the user settings to correct errors/warnings in it and try again.',
        }
    },
}
</script>