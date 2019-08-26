<template>
  <div >
  <v-carousel >
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
  </v-carousel>
  <div>
    <v-container>
      <router-link :to="{name: 'not'}">ครู/วิชา</router-link>

      <v-row>
        <v-col v-for=" img in 4">

            <v-img :src="require('@/assets/logo.png')" style="width: 160px;height: 160px"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
<!--    https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://f.ptcdn.info/158/012/000/1384503471-5266374834-o.jpg',
          },
          {
            src: require('@/assets/logo.png'),
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>
<style>

</style>
