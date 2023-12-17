<template>
  <div>
    <article class="promotions center">
      <section class="promotions__card" v-for="card in getCards" :key="card.id">
        <img class="promotions__card_img" :src="card.src" />
        <h3 class="promotions__card_title title">
          {{ card.title }}
        </h3>
        <p class="promotions__card_text text">
          {{ card.text }}
        </p>
        <button class="promotions__card_btn text">Подробнее</button>
      </section>
    </article>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PromotionComponent", 
  computed: {
    ...mapGetters(["getCards"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variables";

.promotions {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  background-color: #fcfcfc;

  &__card {
    display: flex;
    flex-direction: column;
    box-shadow: 10px 5px 5px #e6e7e8;

    align-items: center;
    gap: 20px;

    border-radius: 20px;
    &_img {
      width: 400px;
      height: 200px;
      border-radius: 20px;
    }
    &_btn {
      padding: 10px;
      background-color: #fecb24;
      margin-bottom: 30px;
      border-radius: 8px;
      width: 145px;
      justify-content: center;
      border-color: #fecb24;
    }
  }
}
</style>