<template>
<nav>
    <v-toolbar flat app color="#FFFFFF">
        <v-toolbar-title class="text-uppercase green--text">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <span class="font-weight-light">tutor</span>
            <span>Mulberry</span>
        </v-toolbar-title>
        <v-icon>fas fa-list</v-icon>
        <v-spacer></v-spacer>

            <v-icon>{{ icons.mdiAccount }}</v-icon>
    </v-toolbar>
</nav>
</template>





<script>
    import  { mdiAccount } from '@mdi/js'

    export default {
        data: () => ({
            icons: {
                mdiAccount,

            },
        }),
    }
</script>
