<template>
    <div class="fColor py-10">
        <v-container>
            <v-card elevation="0" class="rounded-xl pa-5">
                <div>
                    <v-row>
                        <v-col cols="12" md="5">
                            <v-card class="fColor rounded-xl pa-5" elevation="0">
                                <div>
                                    <div class="caption ">#03</div>
                                    <div class="display-3 my-10 textAlign">Technology Marketing</div>
                                    <div class="font-weight-bold pa-5 sub-market-color rounded-xl ml-md-16 mr-md-n16 elevation-5">We offer several ways for your business to be seen on digital media.</div>
                                </div>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="7">
                            <div class="Color">
                                <v-row>
                                    <v-col cols="12">
                                        <span class="d-flex justify-md-start justify-center">
                                            <span class="display-4">01 |</span>
                                            <span class="d-flex flex-column justify-center">
                                                <div class="headline">INTERNET</div>
                                                <div class="headline">MARKETING</div>
                                            </span>
                                        </span>
                                    </v-col>
                                    <v-col cols="12">
                                        <span class="d-flex justify-center">
                                            <span class="display-4">02 |</span>
                                            <span class="d-flex flex-column justify-center">
                                                <div class="headline">DIGITAL</div>
                                                <div class="headline">MARKETING</div>
                                            </span>
                                        </span>
                                    </v-col>
                                    <v-col cols="12">
                                        <span class="d-flex justify-md-end justify-center">
                                            <span class="display-4">03 |</span>
                                            <span class="d-flex flex-column justify-center">
                                                <div class="headline">MOBILEe</div>
                                                <div class="headline">MARKETING</div>
                                            </span>
                                        </span>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-container>
    </div>
</template>

<style scoped>
.fColor {
  background-color: #00999e;
  color: #fff;
}
.sub-market-color{
    background-color: #e7ecec;
    color: #00999e;
}
.Color{
    color: #00999e;
}
.textAlign{
    text-align: start;
}
@media only screen and (max-width: 800px){
    .textAlign{
        text-align: center;
    }
}
</style>