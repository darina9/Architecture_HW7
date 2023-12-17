<template>
  <div>
    <CarouselComponent/>
    <!-- <slider-component></slider-component> -->
    <PromotionComponent />
    
  </div>
</template>
  
<script>
// import CarouselComponent from "@/components/CarouselComponent.vue";
import PromotionComponent from "../components/PromotionComponent.vue";
// import SliderComponent from "../components/SliderComponent.vue";

export default {
  name: "HomePage",
  components: {
    PromotionComponent,
    // CarouselComponent
    // SliderComponent,
  },
};
</script>
