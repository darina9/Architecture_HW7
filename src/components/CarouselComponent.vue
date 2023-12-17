
<template>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </template>
  
  
  <script>
    export default {
        name: 'CarouselComponent',
      data () {
        return {
          items: [
            {
                src: require('@/assets/img/1.png'),
            },
            {
                src: require('@/assets/img/1.png'),
            },
            {
                src: require('@/assets/img/1.png'),
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            },
          ],
        }
      },
    }
  </script>


  
  <style lang="scss" scoped>
  
  </style>