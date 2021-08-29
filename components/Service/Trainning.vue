<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <div>
                        <v-img :src="train" contain></v-img>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div>
                        <div>Trainning</div>
                        <div>Our IT training helps you solve real-world practical computing issues and practice for certification exams</div>
                        <div>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <div></div>
                                </v-col>
                                <v-col cols="12" sm="6"></v-col>
                                <v-col cols="12" sm="6"></v-col>
                                <v-col cols="12" sm="6"></v-col>
                            </v-row>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            train:require('../../assets/image/Service/train.png')
        }
    }
}
</script>