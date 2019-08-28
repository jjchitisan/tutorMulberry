<template>
    <nav>
        <v-app-bar absolute
                color="rgb(0,0,0,0)"
                dense
                   class="elevation-0"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase "></v-toolbar-title>
            <span color="blue-grey darken-3">Tutor</span>
            <router-link :to="{name: 'hello'}">not</router-link>
            <div class="flex-grow-1">

            </div>

            <v-btn icon>
                <v-icon class="text-uppercase green--text">mdi-heart</v-icon>


            </v-btn>

            <v-btn icon>
                <v-icon class="text-uppercase green--text">mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                    left
                    bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon class="text-uppercase green--text">mdi-dots-vertical</v-icon>

                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            v-for="n in 5"
                            :key="n"
                            @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
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
