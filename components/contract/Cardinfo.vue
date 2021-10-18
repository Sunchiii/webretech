<template>
  <div class="CardconPosition">
    <v-container>
      <v-card class="rounded-xl Overflow">
        <v-row no-gutters>
          <v-col cols="12" md="7">
            <GMap
              ref="gMap"
              language="en"
              :cluster="{ options: { styles: clusterStyle } }"
              :center="{ lat: locations[0].lat, lng: locations[0].lng }"
              :options="{ fullscreenControl: true, styles: mapStyle }"
              :zoom="15"
            >
              <GMapMarker
                v-for="location in locations"
                :key="location.id"
                :position="{ lat: location.lat, lng: location.lng }"
                :options="{
                  icon:pins.selected
                }"
                @click="currentLocation = location"
              >
                <GMapInfoWindow :options="{ maxWidth: 200 }">
                  <code>
                    lat: {{ location.lat }}, lng: {{ location.lng }}
                  </code>
                </GMapInfoWindow>
              </GMapMarker>
              <GMapCircle :options="circleOptions" />
            </GMap>
          </v-col>
          <v-col cols="12" md="5" class="pl-16">
            <div style="height: 100%;" class="py-10 px-14 d-flex flex-column justify-space-between">
              <div>
                <v-row no-gutters>
                  <v-col cols="2"><v-icon size="30">mdi-map-marker-radius</v-icon></v-col>
                  <v-col cols="10">
                    <div class="title">Address</div>
                    <div class="subtitle-1">Phontong/Sisattanark</div>
                    <div class="subtitle-1">Veintaine</div>
                  </v-col>
                </v-row>
              </div>
              <div>
                <v-row no-gutters>
                  <v-col cols="2"><v-icon size="30">mdi-phone-in-talk</v-icon></v-col>
                  <v-col cols="10">
                    <div class="title">Phone</div>
                    <div class="subtitle-1">(856) 20 9605 9236</div>
                    <div class="subtitle-1">(856) 20 9414 8194</div>
                  </v-col>
                </v-row>
              </div>
              <div>
                <v-row no-gutters>
                  <v-col cols="2"><v-icon size="25">mdi-email-multiple</v-icon></v-col>
                  <v-col cols="10">
                    <div class="title">Email</div>
                    <div class="subtitle-1">kataiy@retech.com</div>
                    <div class="subtitle-1">khattaphone@retech.com</div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentLocation: {},
      circleOptions: {},
      locations: [
        {
          lat: 17.925277058744204,
          lng: 102.6254357016234,
        },
        // {  // can add another maker
        //   lat: 17.815,
        //   lng: '102.9819',
        // },
        // {
        //   lat: '17.12',
        //   lng: '102.21',
        // },
      ],
      pins: {
        selected: require('../../assets/image/marker.png'),
        notSelected: 'data:image/png;base64,iVBORw0KGgo...',
      },
      mapStyle: [],
      clusterStyle: [
        {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    }
  },
}
</script>
<style scoped>
.Zindex-1{
  z-index: 1;
}
.Zindex-2{
  z-index: 2;
}
.Overflow{
  overflow: hidden;
}
.CardconPosition{
  margin-top: -200px;
}
</style>