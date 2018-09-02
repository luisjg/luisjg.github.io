<template>
  <div id="modal" class="modal">
    <div @click="closeModal" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title" v-html="modalAttrs.title"></p>
        <button @click.prevent="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body" v-html="modalAttrs.details">
      </section>
      <footer class="modal-card-foot">
        <a :href="modalAttrs.url" rel="noreferrer" class="button btn-color" :title="modalAttrs.title + ' link'" target="_blank" v-html="'Visit ' + modalAttrs.title"></a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
  .btn-color {
    background-color: #766C7F;
    color: whitesmoke;
  }
</style>
<script>
export default {
  props: ['modalAttrs'],
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.close()
      }
    })
  },
  methods: {
    closeModal: function () {
      this.close()
    },
    close: function () {
      document.documentElement.classList.remove('is-clipped')
      this.$emit('disable')
    }
  }
}
</script>
