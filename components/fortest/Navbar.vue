<template>
  <v-app>
    <div>

    <div class="top">
      <v-container class="pt-0 pb-0">
        <v-row no-gutters align-center>
          <v-col cols="6">
            <v-icon :color="Topwhite" :size="TopiconSize"
              >mdi-map-marker-radius-outline</v-icon
            >
            <div class="subtitle-2 inline tColorwhite">
              Retech sole.Co.Ltd/Phontong
            </div>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <div class="inline mx-5">
              <v-icon :color="Topwhite" :size="TopiconSize"
                >mdi-phone-in-talk</v-icon
              >
              <div class="inline tColorwhite subtitle-2">020 96059 236</div>
            </div>
            <div class="inline">
              <v-icon :color="Topwhite" :size="TopiconSize">mdi-email</v-icon>
              <div class="inline tColorwhite subtitle-2">kataiy@retech.com</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="navbar" class="white">
      <v-container class="pt-0 pb-0">
        <v-row>
          <v-col cols="4">
            <v-img :src="Logo" height="50" width="100" contain></v-img>
          </v-col>
          <v-col cols="4">
            <p id="text"></p>
          </v-col>
          <v-col cols="4"></v-col>
        </v-row>
      </v-container>
    </div>

    <div class="content">
      <h3>Sticky Navigation Example</h3>
      <p>
        The navbar will stick to the top when you reach its scroll position.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut
        quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert
        laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
        molestiae voluptatibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolore
        ut sapiente aut suscipit a quae saepe molestiae praesentium soluta!
        Obcaecati odit consequatur enim molestiae. Vitae quo aspernatur
        consequuntur magni.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora esse
        veritatis consequuntur tenetur totam accusantium laudantium numquam iste
        minus magnam doloremque natus at quas tempore fugit recusandae dolorem,
        exercitationem molestiae. Nesciunt illum rem nobis animi corrupti nemo
        quas enim alias nostrum, laudantium iure at architecto, minus ipsa.
        Vitae velit illo dolores! Inventore voluptatibus porro vero alias
        quibusdam! Dolorem adipisci possimus exercitationem laboriosam fugit!
        Dolorum id laborum corporis consectetur neque natus voluptas est magnam
        atque, totam tempora cumque similique quam ullam debitis velit sequi
        rerum repellat ipsum? Quis, libero explicabo voluptates recusandae
        officiis asperiores fugit ut qui dolorem nam, eum hic?
      </p>
    </div>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      TopiconSize: 20,
      Topwhite: 'white',
      Logo: require('~/assets/image/retech.avif'),
    }
  },
  created() {
    if (process.client) {
      this.nb()
    }
  },
  methods: {
    nb() {
      window.onscroll = function () {
        myFunction()
      }

      var navbar = document.getElementById('navbar')
      var sticky = navbar.offsetTop

      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add('sticky')
        } else {
          navbar.classList.remove('sticky')
        }
      }
    },
  },
}
</script>
<style scoped>
.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

#navbar {
  overflow: hidden;
}

.content {
  padding: 16px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 2px 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.sticky + .content {
  padding-top: 60px;
}

.inline {
  display: inline;
}
.top {
  height: 25px;
  width: 100%;
  background-color: #00999e;
}
.navbar {
  height: 50px;
}
.tColorwhite {
  color: white;
}
</style>