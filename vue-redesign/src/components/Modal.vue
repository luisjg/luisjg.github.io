<template>
  <div id="modal" class="modal">
    <div @click="closeModal" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title" v-html="modalAttrs.title"></p>
        <button @click.prevent="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div style="line-height: 1.5rem; padding-bottom: 1rem;" v-html="modalAttrs.details"></div>
        <div v-if="modalAttrs.roles" style="padding-bottom: 1rem;">
          <strong>Role in the project</strong>
          <ul style="padding-left: 1rem;">
            <li v-for="(items, id) in modalAttrs.roles" :key=id>{{items}}</li>
          </ul>
        </div>
        <div v-if="modalAttrs.roles">
          <strong>Screen Shot</strong>
        </div>
        <div v-if="modalAttrs.roles">
          <img :src="modalAttrs.image" width="600px">
        </div>
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
