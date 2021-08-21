<template>
    <div class="white mt-10 teal--text text--lighten-1">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <div>
                        <div class="caption my-3 d-flex justify-center justify-md-start ">Why Retech?</div>
                        <div class="font-size font-weight-bold d-flex justify-center justify-md-start">Here Are Three Things That</div>
                        <div class="font-size font-weight-bold d-flex justify-center justify-md-start">Make Us Work Efficiently.</div>
                        <v-timeline align-top dense class="mt-5">
                            <v-timeline-item color="#00999e">
                                <v-card elevation="0" class="teal--text text-lighten-1"><div class="title">Collect Idaes</div><div class="caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos est optio adipisci nostrum earum sed odit nobis illum? Error, deserunt!</div></v-card>
                            </v-timeline-item>
                            <v-timeline-item color="#00999e">
                                <v-card elevation="0" class="teal--text text-lighten-1"><div class="title">Analysis</div><div class="caption">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus eligendi aliquid officiis a voluptatem quo? Obcaecati earum suscipit ut sunt?</div></v-card>
                            </v-timeline-item>
                            <v-timeline-item color="#00999e" >
                                <v-card elevation="0" class="teal--text text-lighten-1"><div class="title">Finalize Product</div><div class="caption">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quo architecto nihil eaque molestiae iusto vel eveniet perferendis, impedit incidunt.</div></v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </div>
                </v-col>
                <v-col cols="12" md="6" class="d-flex align-center">
                    <div style="width:100%;">
                        <v-img :src="Workp" contain width="100%"></v-img>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Workp:require('../../assets/image/Workp.png')
        }
    },
}
</script>
<style scoped>
.font-size{
  font-size: 2.15rem;
  line-height: 3rem;
}
 /* @media only screen and (max-width: 1024px){
    }
@media only screen and (max-width: 960px){
} */
@media only screen and (max-width: 600px){
    .font-size{
        font-size: 1.5rem;
        line-height: 2rem;
    }
}



.fade-in {
    opacity:0;
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;

    -webkit-animation-fill-mode:forwards; 
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration:1s;
    -moz-animation-duration:1s;
    animation-duration:1s;
}
</style>