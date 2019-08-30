<template>
<div id='app'>
 <v-app>
       <navbar/> 
        
        
            <router-view />
       
    </v-app>
</div>
   

</template>

<script>
    import Navbar from "./components/Navbar";

    export default {
        name: 'App',
        components: {
            Navbar
        },
        data() {
            //
            return {}
        },methods:{
            async router(link){
      await this.$router.push(link);
    },
        }
    }
</script>





