<template>
    <div>
        <Flicking :options="{ align: 'prev', circular: true }" @move-end="onMoveEnd">
            <div class="slide slide1"></div>
            <div class="slide slide2"></div>
            <div class="slide slide3"></div>
        </Flicking>

    </div>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";

export default {
  components: {
    Flicking: Flicking
  }
}

</script>

<style scoped>
.slide {
  width: 60%;
  height: 300px;
  border-radius: 5px;
}
.slide1 { background-color: #ff6f61; }
.slide2 { background-color: #6b4226; }
.slide3 { background-color: #c2c2c2; }
</style>