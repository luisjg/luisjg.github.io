<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="'../assets/' + cardIndex + '.png'" :alt="cardData.title + 'Application image'">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="has-text-centered title is-4"><a v-on:click.prevent="updateModal" href="#" :id="cardIndex" v-html="cardData.title"></a></p>
        <span v-html="cardData.description"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modalAction: function (event) {
      document.documentElement.classList.add('is-clipped')
      this.updateModal()
    },
    updateModal: function () {
      this.$emit('currentModal', this.cardIndex)
    }
  },
  components: {
    'modal': () => import('@/components/Modal')
  },
  props: ['cardIndex', 'cardData']
}
</script>

