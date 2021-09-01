<template>
    <div class="Color my-16">
        <v-container>
            <div>
                <div class="caption text-center">#04</div>
                <div class="display-3 text-uppercase text-center font-weight-bold">instant programs</div>
                <div class="subtitle-1 text-center">Our Service instant program</div>
                <v-row >
                    <v-col cols="12" md="4">
                        <div class="d-flex flex-column align-center">
                            <div class="instantItem my-10"><v-img :src="foodCourt" contain></v-img></div>
                            <div class="headline">Food Court</div>
                            <div class="headline">System</div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="d-flex flex-column align-center">
                            <div class="instantItem my-10"><v-img :src="pos" contain></v-img></div>
                            <div class="headline">Point</div>
                            <div class="headline">Of Sale</div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="4">
                        <div class="d-flex flex-column align-center">
                            <div class="instantItem my-10"><v-img :src="minimart" contain></v-img></div>
                            <div class="headline">Minimart</div>
                            <div class="headline">Management</div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            foodCourt:require('../../assets/image/Service/FoodCourt.svg'),
            pos:require('../../assets/image/Service/pos.svg'),
            minimart:require('../../assets/image/Service/minimart.svg')
        }
    }
}
</script>
<style scoped>
.Color{
    color: #00999e;
}
.instantItem{
    width: 45%;
}
</style>