<template>
  <div class="my-16 fColor">
    <v-container>
      <div>
        <div class="display-3 font-weight-bold text-center">Drop Us And Line</div>
        <div class="subtitle-1 text-center my-5">
          Reach out to us from our contact form and we will get back to you
          shortly.
        </div>
        <div>
          <v-form @submit.prevent="submit" ref="form" lazy-validation>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
                  outlined
                  color="teal"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  label="Lastname"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="phone"
                  label="Phone"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="discrip" autocomplete="Discription" label="Discription" outlined></v-textarea>
              </v-col>
              <v-col cols="12">
                  <div class="text-center">
                      <v-btn type="submit" @click="form" class="rounded-xl white--text" color="#00999e">Submit to send</v-btn>
                  </div>
              </v-col>
            </v-row>
          </v-form>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nameRules: [(v) => !!v || 'Name is required'],
      name: '',
      lastname: '',
      email: '',
      phone: '',
      discrip:'',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods:{
      form(){
      }
  }
}
</script>
<style scoped>
.fColor{
    color: #00999e;
}
</style>