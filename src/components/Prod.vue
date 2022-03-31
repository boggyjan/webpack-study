<template>
  <div class="prod">
    <div class="images">
      <Carousel :margin="10">
        <img v-for="img in item.images" :src="img" loading="lazy">
      </Carousel>
    </div>

    <div class="title">
      {{ item.title }}
    </div>
    <div class="price">
      {{ item.currency }} {{ item.price }}
    </div>
  </div>
</template>

<script>
import { Carousel } from 'boggy-vue2-components'

export default {
  components: {
    Carousel
  },

  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: 'no-name',
          price: 0,
          currency: 'NT$'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.prod {
  margin-bottom: 25px;
  padding: 10px;
  box-shadow: 0 0 10px #0003;

  .images {
    margin: -10px -10px 0 -10px;

    .carousel__pagination {
      position: relative;
      top: -20px;
      padding: 0;
      line-height: 0;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>