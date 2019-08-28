



 <template>
<div class="bg">
    <v-layout row wrap style="height:100vh; width: 100vw;">
        <v-flex xx6 >
            <v-layout row wrap fill-height justify-center align-center>
                <img src="" alt="">
            </v-layout>
        </v-flex>    
        <v-flex xx6>
            <v-layout row wrap fill-height justify-center align-center >
                <v-card style="padding:5%; border-radius:50px;">
                <div v-if="Status">
                    <img :src="user.img" alt="">
                    <pre>{{user}}</pre>
                </div>
               
            <center>
                <facebook-login class="button" appId="406364773336885" @sdk-loaded="loadFacebook" @login="loginFacebook" @logout="logoutFacebook" @get-initial-status="getFacebookProfile">
    </facebook-login>
            </center>
            </v-card>
            </v-layout>
        </v-flex>    
    </v-layout>
    </div>
</template>