<template>
  <div>
  
   <v-layout class="bg" row wrap style="height:200vh; widgth:300vw;">
     <v-container>
     <v-layout row wrap justify-center>
        <v-flex xs12 md4>
        <v-btn  rounded block large  class="ma-10" color="blue lighten-4 black--text">Software</v-btn>
      </v-flex>
      <v-flex xs12 md4>
        <v-btn  rounded block large  class="ma-10" color="blue lighten-4 black--text">English</v-btn>
      </v-flex>
      <v-flex xs12 md4>
        <v-btn rounded block large class="ma-10" color="blue lighten-4 black--text">Thai languages</v-btn>
      </v-flex>
      <v-flex xs12 md4>
        <v-btn rounded block large class="ma-10" color="blue lighten-4 black--text">Mathematics</v-btn>
      </v-flex>
      <v-flex xs12 md4>
        <v-btn rounded block large class="ma-10" color="blue lighten-4 black--text">sciences</v-btn>
      </v-flex>
      <v-flex xs12 md4>
        <v-btn rounded block large class="ma-10" color="blue lighten-4 black--text">Total</v-btn>
      </v-flex>
  

  <v-flex xs12 md3>
   <v-card color="cyan lighten-4"
    style="border-radius:50px;"
    class="ma-3"
    max-width="300"
    min-height="400"
    elevation="9"
  >
    <v-img
      class="white--text"
      height="200px"
      src="https://images.unsplash.com/photo-1556302132-40bb13638500?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    >
      <v-card-title class="align-end fill-height"></v-card-title>
    </v-img>

    <v-card-text>
      <span>ชื่อ</span><br>
      <span class="text--primary">
        <span>วิชาที่สอน</span><br>
        <span>รายละเอียด,ราคา</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        outlined  
        color="green"
      >
        ดูข้อมูล
      </v-btn>
      <v-btn
        outlined
        color="blue"
      >
        สมัครเรียน
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-flex>

  <v-flex xs12 md3>
   <v-card color="cyan lighten-4"
    style="border-radius:50px;"
    class="ma-3"
    max-width="300"
    min-height="400"
    elevation="9"
  >
    <v-img
      class="white--text"
      height="200px"
      src="https://images.unsplash.com/photo-1558886196-d722057c60bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    >
      <v-card-title class="align-end fill-height"></v-card-title>
    </v-img>

    <v-card-text>
      <span>ชื่อ</span><br>
      <span class="text--primary">
        <span>วิชาที่สอน</span><br>
        <span>รายละเอียด,ราคา</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        outlined  
        color="green"
      >
        ดูข้อมูล
      </v-btn>
      <v-btn
        outlined
        color="blue"
      >
        สมัครเรียน
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-flex>


    <v-flex xs12 md3>
   <v-card color="cyan lighten-4"
    style="border-radius:50px;"
    class="ma-3"
    max-width="300"
    min-height="400"
    elevation="9"
  >
    <v-img
      class="white--text"
      height="200px"
      src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    >
      <v-card-title class="align-end fill-height"></v-card-title>
    </v-img>

    <v-card-text>
      <span>ชื่อ</span><br>
      <span class="text--primary">
        <span>วิชาที่สอน</span><br>
        <span>รายละเอียด,ราคา</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        outlined  
        color="green"
      >
        ดูข้อมูล
      </v-btn>
      <v-btn
        outlined
        color="blue"
      >
        สมัครเรียน
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-flex>


  <v-flex xs12 md3>
   <v-card color="cyan lighten-4"
    style="border-radius:50px;"
    class="ma-3"
    max-width="300"
    min-height="400"
    elevation="9"
  >
    <v-img
      class="white--text"
      height="200px"
      src="https://images.unsplash.com/photo-1559921914-2812b8bb9830?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    >
      <v-card-title class="align-end fill-height"></v-card-title>
    </v-img>

    <v-card-text>
      <span>ชื่อ</span><br>
      <span class="text--primary">
        <span>วิชาที่สอน</span><br>
        <span>รายละเอียด,ราคา</span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        outlined
        color="green"
      >
        ดูข้อมูล
      </v-btn>
      <v-btn
        outlined
        color="blue"
      >
        สมัครเรียน
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-flex>



  


   
      </v-layout>
  </v-container>

  


  </v-layout>
   </div> 
</template>
<style>

  .bg{
background-image: url('../assets/bg3.jpg');
background-attachment: fixed;
background-size: cover;
}

</style>

<script>
export default {
  data() {
    return {
      
    };
  },
}
</script>
