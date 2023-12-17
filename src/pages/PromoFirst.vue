<template>
  <div>
  <h1 class="promo">Promo first</h1>
  <div class="promo_img">
  <img  src="../assets/img/1.png"></div></div>
</template>

<script>
export default {
  name: "PromoFirst",

 
};
</script>
<style lang="scss" scoped>
@import '../style/variables';
.promo{
  text-align: center;
  margin-top: 100px;
  font-size: 50px;
  &_img{
    display: grid;
  place-items: center;
  margin-top: 100px;
  }
  
}

</style>
