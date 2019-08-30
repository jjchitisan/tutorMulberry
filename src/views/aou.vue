<template>
  <div class="bg">
    <v-layout column justify-center align-center style="height:100vh; width: 100vw;">
      <v-card class style="margin-top:5%; width:70%;">
        <v-toolbar color="amber darken-3" dark>Information</v-toolbar>
        <v-layout row wrap>
          <v-flex xs12 style="padding:20px;">
            <h2> Subject</h2>
            <v-text-field name="name" label="Subject" id="id"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 style="padding:20px;">
            <h2>Budget Money/Hr</h2>
            <v-text-field name="name" label="Budget Money/hr" id="id"></v-text-field>
          </v-flex>
        </v-layout>
        <div class="text-center">
          <v-btn  class="ma-2" dark>
            <v-icon dark></v-icon>Back
          </v-btn>
          <v-btn  class="ma-2" color="red" dark>
            <v-icon dark></v-icon>Submit
          </v-btn>
        </div>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>
<style>
.bg {
  
background-image: url('../assets/bg3.jpg');
background-attachment: fixed;
background-size: cover;
}
</style>