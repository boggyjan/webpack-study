<template>
  <div class="main">
    <nav class="page-nav">
      <a href="#" @click="page = 'prod'">Prod</a>
      <a href="#" @click="page = 'rules'">Rule</a>
    </nav>

    <div v-if="page === 'prod'">
      <Prod :item="prodItem" />

      <Carousel :items="3" :margin="10">
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1011/1400/550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1012/1400/550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1013/1400/550" loading="lazy">
          </a>
        </div>
        <div class="banner">
          <a href="https://www.google.com">
            <img src="https://picsum.photos/id/1014/1400/550" loading="lazy">
          </a>
        </div>
      </Carousel>
    </div>

    <div v-if="page === 'rules'">
      <h2>Rules</h2>
      <Rules />
    </div>
  </div>
</template>

<script>
import { Carousel } from 'boggy-vue2-components'
import Prod from './components/Prod.vue'
import Rules from './components/Rules.vue'

export default {
  components: {
    Carousel,
    Prod,
    Rules
  },

  data () {
    return {
      page: 'prod',
      prodItem: {
        title: 'Ground Coffee Pack 6oz',
        price: 600,
        currency: 'NT$',
        images: [
          'https://picsum.photos/id/235/200/100',
          'https://picsum.photos/id/238/200/100',
          'https://picsum.photos/id/239/200/100'
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.main {
  max-width: 600px;

  .page-nav {
    margin-bottom: 10px;
    padding: 10px;
    box-shadow: 0 0 10px #0003;
  }

  .banner {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>