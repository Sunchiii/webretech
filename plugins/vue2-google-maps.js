import Vue from 'vue'
import * as VueGoogleMaps from './vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBt7ewxNoPIZOLg86RKKUiY0scBilVdELI',
    libraries: 'places',
  },
 
})