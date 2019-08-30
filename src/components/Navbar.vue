<template>
  <nav>
   
    <v-app-bar absolute color="rgb(0,0,0,0)" dense class="elevation-0">
      <v-toolbar-title> 
      </v-toolbar-title>
      <v-btn
        dark
        @click="router('/')"
        class="text-uppercase red--text accent-4"
        color="transparent"
        text
      >Tutormulberry</v-btn>
      <div class="flex-grow-1">
        <v-btn
          dark
          @click="router('/got')"
          class="text-uppercase red--text accent-4"
          color="transparent"
          outlined
          text
        >รายวิชา</v-btn>
      
        <v-btn
          dark
          @click="router('/not')"
          class="text-uppercase red--text accent-4"
          color="transparent"
          outlined
          text
        >ผู้สอน</v-btn>
        
      </div>
      <v-spacer></v-spacer>
      <v-btn v-if="user.id" rounded @click="dialog = true">
        <img :src="user.img "  alt="" style="height:30px; border-radius:50px;">
        {{user.name}}
      </v-btn>
      <v-btn rounded v-else @click="dialog = true" color="blue darken-2" dark >Login with Facebook</v-btn>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500"> 
          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

            <v-card-text>
              <center>
                <div v-if="Status">
                  <img :src="user.img" alt />
                  <h2>Name : {{user.name}}</h2>
                </div>
              </center>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <facebook-login
                class="button"
                appId="406364773336885"
                @sdk-loaded="loadFacebook"
                @login="loginFacebook"
                @logout="logoutFacebook"
                @get-initial-status="getFacebookProfile"
              ></facebook-login>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app-bar>
  </nav>
</template>





<script>
import facebookLogin from "facebook-login-vuejs";

export default {
  name: "Root",
  /*-------------------------Load Component---------------------------------------*/
  components: {
    facebookLogin
  },
  /*-------------------------Set Component---------------------------------------*/
  props: {},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
    return {
      dialog:false,
      Facebook: {},
      Status: false,
      user: {}
    };
  },
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
  async mounted() {
    /**** Call loading methods*/
    this.load();
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
  async beforeRouteEnter(to, from, next) {
    next();
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed: {},
  /*-------------------------Methods------------------------------------------*/
  methods: {
    loginFacebook() {
      this.Status = true;
      this.getFacebookProfile();
      //location.reload()
    },
    logoutFacebook() {
      this.Status = false;
      this.dialog = false;
      this.user = {};
      location.reload();
    },
    getFacebookProfile() {
      try {
        this.Facebook.api(
          "/me",
          "GET",
          {
            fields: "id,name,email"
          },
          userInformation => {
            this.user = userInformation;
            this.user.img = `https://graph.facebook.com/${userInformation.id}/picture?type=large`;
                this.dialog = false
          }
        );
      } catch (error) {}
    },
    loadFacebook(facebook) {
      console.log("[open api]", facebook);
      this.Facebook = facebook.FB;
      if (facebook.isConnected) {
        this.Status = true;
        this.getFacebookProfile();
      }
    },
    async router(link){
     await this.$router.push(link);
    },
    /******* Methods default run ******/
    load: async function() {}
  }
};
</script>