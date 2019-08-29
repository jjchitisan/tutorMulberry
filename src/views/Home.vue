<template>
<div class="bg">
    <v-layout row wrap style="height:100vh; width: 100vw;">
        <v-flex xx6 >
            <v-layout row wrap fill-height justify-center align-center>
                <div class="text-center">
    
                
                </div>
            </v-layout>
        </v-flex>    
        <v-flex xx6>
            <v-layout row wrap fill-height justify-center align-center >
                <v-card style="padding:5%; border-radius:50px;">
              
            </v-card>
            </v-layout>
        </v-flex>    
    </v-layout>
    </div>
</template>

<script>
 import facebookLogin from 'facebook-login-vuejs';

 export default {
     name: 'Root',
     /*-------------------------Load Component---------------------------------------*/
     components: {
         facebookLogin
     },
     /*-------------------------Set Component---------------------------------------*/
     props: {

     },
     /*-------------------------DataVarible---------------------------------------*/
     data() {
         return {
             
             Facebook: {},
             Status: false,
             user: {},
         };
     },
     /*-------------------------Run Methods when Start this Page------------------------------------------*/
     async mounted() {
         /**** Call loading methods*/
         this.load();
     },
     /*-------------------------Run Methods when Start Routed------------------------------------------*/
     async beforeRouteEnter(to, from, next) {
         next()
     },
     /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
     computed: {

     },
     /*-------------------------Methods------------------------------------------*/
     methods: {
         loginFacebook(){
              this.Status = true;
              this.getFacebookProfile();
              location.reload()
         },
         logoutFacebook() {
             this.Status = false;
             this.user = {};
         },
         getFacebookProfile() {
             try {
                 this.Facebook.api('/me', 'GET', {
                         fields: 'id,name,email'
                     },
                     userInformation => {
                          
                         this.user = userInformation;
                         this.user.img = `https://graph.facebook.com/${userInformation.id}/picture?type=large`;
                     } 
                 )
             } catch (error) {

             }

         },
         loadFacebook(facebook) {
             console.log('[open api]', facebook);
             this.Facebook = facebook.FB
             if (facebook.isConnected) {
                 this.Status = true;
                 this.getFacebookProfile();
                 
             }
         },
         /******* Methods default run ******/
         load: async function () { 
         }
     },
 }
</script>
<style>
.bg {
  
background-image: url('../assets/bg3.jpg');
background-attachment: fixed;
background-size: cover;
}
</style>