<template>
    <div class="fColor py-16">
        <v-container>
            <div class="caption text-center">#01</div>
            <div class="subtitle-1 text-uppercase text-center">-- System Development --</div>
            <div class="headline text-center my-4">we enable your business to leverage the benefits of IT consulting and software development services that adapt seamlessly to your project requirements and business neesd.</div>
            <div class="my-10">
                <v-row>
                    <v-col cols="12" sm="6" md="2" class="pa-10">
                        <div><v-img :src="webdev" contain class="my-2"></v-img></div>
                        <div class="text-center">Web</div>
                        <div class="text-center">development</div>
                    </v-col>
                    <v-col cols="12" sm="6" md="2" class="pa-10">
                        <div><v-img :src="webdesign" contain class="my-2"></v-img></div>
                        <div class="text-center">Web</div>
                        <div class="text-center">design</div>
                    </v-col>
                    <v-col cols="12" sm="6" md="2" class="pa-10">
                        <div><v-img :src="mobiledev" contain class="my-2"></v-img></div>
                        <div class="text-center">Mobile</div>
                        <div class="text-center">development</div>
                    </v-col>
                    <v-col cols="12" sm="6" md="2" class="pa-10">
                        <div><v-img :src="iot" contain class="my-2"></v-img></div>
                        <div class="text-center">IoT</div>
                        <div class="text-center">network</div>
                    </v-col>
                    <v-col cols="12" sm="6" md="2" class="pa-10">
                        <div><v-img :src="database" contain class="my-2"></v-img></div>
                        <div class="text-center">Database</div>
                        <div class="text-center">management</div>
                    </v-col>
                    <v-col cols="12" sm="6" md="2" class="pa-10">
                        <div><v-img :src="windows" contain class="my-2"></v-img></div>
                        <div class="text-center">Windows</div>
                        <div class="text-center">development</div>
                    </v-col>
                </v-row>
            </div>
            <div class="subtitle-1 text-uppercase text-center" ><NuxtLink to="/" class="white--text ">-- Please select the service you need and contact us now!! --</NuxtLink></div>
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            webdev:require('../../assets/image/CardSV/webdev.png'),
            webdesign:require('../../assets/image/CardSV/webdesign.png'),
            mobiledev:require('../../assets/image/CardSV/mobiledev.png'),
            iot:require('../../assets/image/CardSV/iot.png'),
            database:require('../../assets/image/CardSV/database.png'),
            windows:require('../../assets/image/CardSV/windowsdev.png')
        }
    }
}
</script>
<style scoped>
.fColor {
  background-color: #00999e;
  color: #fff;
}
.textDecoractionNone{
    text-decoration: none;
}
/* .textAlign{
    text-align: start;
}
@media only screen and (max-width: 800px){
    .textAlign{
        text-align: center;
    }
} */
</style>