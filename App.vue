<template>
  <div class="w-full">
    <div>
      <toolbar-content></toolbar-content>
    </div>
    <div>
      <public-card-info :product="cardsData"></public-card-info>
      <footer-content></footer-content>
    </div>
  </div>
</template>

<script>
import CardsInfo from '@/cards/components/card-info.component.vue';
import FooterContent from "@/cards/components/footer-content.component.vue";
import AboutCardsContent from "@/cards/components/aboutCards-content.component.vue";

export default {
  components: {
    FooterContent,
    AboutCardsContent,
    'public-card-info': CardsInfo,
    'footer-content': FooterContent,
    'toolbar-content': AboutCardsContent,
  },
  data() {
    return {
      cardsData: {},
    };
  },
  mounted() {
  },
};
</script>

<style scoped>
</style>
