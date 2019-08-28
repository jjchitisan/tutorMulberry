<template>
    <nav>
        <v-app-bar absolute
                color="rgb(0,0,0,0)"
                dense
                   class="elevation-0"
        >
           

            <v-toolbar-title ></v-toolbar-title>
            <v-btn dark @click="$router.push('/')"  class="text-uppercase deep-purple--text accent-4" color="transparent"  text >Tutormulberry</v-btn>
            <div class="flex-grow-1">
            <v-btn dark @click="$router.push('/got')"  class="text-uppercase deep-purple--text darken-4" color="transparent" outlined text >รายวิชา</v-btn>
            <v-btn dark @click="$router.push('/not')"  class="text-uppercase deep-purple--text darken-4" color="transparent" outlined text >ผู้สอน</v-btn>
            </div>

           
            

            
                

                
        </v-app-bar>



    </nav>
</template>





<script>


    export default {
        data() {
            return {
                
            }
        }
    }
</script>
