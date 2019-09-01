<template>
  <div id="modal" class="modal">
    <div @click="closeModal" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title" v-html="modalAttrs.title"></p>
        <button @click.prevent="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <strong>Project Details</strong>
        <div style="line-height: 1.5rem; padding-bottom: 1rem;" v-html="modalAttrs.details"></div>
        <template v-if=modalAttrs.tech_stack>
          <strong>Technology Stack</strong>
          <p v-html="modalAttrs.tech_stack"></p>
        </template>
        <div v-if="modalAttrs.roles" style="padding-bottom: 1rem;">
          <strong>Role in the project</strong>
          <ul style="padding-left: 1rem;">
            <li v-for="(items, id) in modalAttrs.roles" :key=id>{{items}}</li>
          </ul>
        </div>
        <template v-if="modalAttrs.image">
          <strong>Screen Shot</strong>
          <figure class="image">
            <img :src="modalAttrs.image">
          </figure>
        </template>
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
        this.closeModal()
      }
    })
  },
  methods: {
    closeModal: function () {
      document.documentElement.classList.remove('is-clipped')
      this.$emit('disable')
    }
  }
}
</script>
