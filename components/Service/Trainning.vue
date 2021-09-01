<template>
    <div class="textColor my-5">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <div>
                        <v-img :src="train" contain></v-img>
                    </div>
                </v-col>
                <v-col cols="12" md="6" class="d-flex align-center">
                    <div>
                        <div class="caption textAlign">#02</div>
                        <div class="title text-uppercase textAlign">-- Trainning --</div>
                        <div class="display-2 textAlign my-4">Our IT training helps you solve real-world practical computing issues and practice for certification exams</div>
                        <div>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <div class="textAlign">
                                        <v-icon color="#00999e">mdi-check</v-icon>
                                        <span>Computer Network</span>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <div class="textAlign">
                                        <v-icon color="#00999e">mdi-check</v-icon>
                                        <span>Application Development</span>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <div class="textAlign">
                                        <v-icon color="#00999e">mdi-check</v-icon>
                                        <span>Web development</span>
                                    </div>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <div class="textAlign">
                                        <v-icon color="#00999e">mdi-check</v-icon>
                                        <span>Web development</span>
                                    </div>
                                </v-col>
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
<style scoped>
.OutLine{
    border: 1px solid;
}
.fColor {
  background-color: #00999e;
  color: #fff;
}
.textColor{
    color: #00999e;
}
.textAlign{
    text-align: start;
}
@media only screen and (max-width:800px){
    .textAlign{
        text-align: center;
    }
}
</style>