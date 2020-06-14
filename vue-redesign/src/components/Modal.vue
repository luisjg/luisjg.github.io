<template>
  <div id="modal" class="modal">
    <div @click="closeModal" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title" v-html="modifyModalTitle"></p>
        <button @click.prevent="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <strong v-if="displayDetailsOrHighlights">Project Details</strong>
        <strong v-else>Highlights</strong>
        <p class="paragraph-styled pb-1" v-html="modalAttrs.details"></p>
        <template v-if="modalAttrs.tech_stack">
          <strong>Technology Stack</strong>
          <p class="paragraph-styled pb-1" v-html="modalAttrs.tech_stack"></p>
        </template>
        <div v-if="modalAttrs.roles" class="pb-1">
          <strong>Roles in the project</strong>
          <ul class="li-styled">
            <li v-for="(items, id) in modalAttrs.roles" :key="id" v-html="items"></li>
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
        <a :href="modalAttrs.url" rel="noopener noreferrer" class="button btn-color" :title="modifyModalTitle + ' link'" target="_blank" v-html="'Visit ' + modifyModalTitle"></a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
  .btn-color {
    background-color: #766C7F;
    color: whitesmoke;
  }
  .paragraph-styled {
    line-heigh: 1rem;
  }
  .li-styled {
    padding-left: 1rem;
  }
  .pb-1 {
    padding-bottom: 1rem;
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
  },
  computed: {
    displayDetailsOrHighlights: function () {
      if (this.modalAttrs.id === 'gcc' || this.modalAttrs.id === 'csun') {
        return false
      }
      return true
    },
    modifyModalTitle: function () {
      if (this.modalAttrs.id === 'csun') {
        return 'Cal State Northridge'
      }
      return this.modalAttrs.title
    }
  }
}
</script>
