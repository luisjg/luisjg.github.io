<template>
  <div id="portfolio">
    <section id="portfolio" class="section">
      <div class="container">
        <h2 class="title">
          Portfolio
        </h2>
        <p class="subtitle">
          What We Built
        </p>
      </div>
    </section>

    <div class="columns is-centered" :class="applyPadding()">
      <div v-for="(item, value) in firstHalfOfProjects" :key="value" class="column is-one-fifth-desktop is-one-half-tablet">
        <figure class="image">
          <a @click.prevent="modalAction" href="#"><img :data-id="item[0]" :src="item[1].image" :alt="item[1].title + ' App Image'"></a>
        </figure>
        <p class="has-text-centered title is-4"><a @click.prevent="modalAction" :data-id="item[0]" href="#" class="app-links" v-html="item[1].title"></a></p>
        <div class="has-text-centered" v-html="item[1].description"></div>
      </div>
    </div>

    <div class="columns is-centered pb">
      <div v-for="(item, value) in secondHalfOfProjects" :key="value" class="column is-one-fifth-desktop is-one-half-tablet">
        <figure class="image">
          <a @click.prevent="modalAction" href="#"><img :data-id="item[0]" :src="item[1].image" :alt="item[1].title + ' App Image'"></a>
        </figure>
        <p class="has-text-centered title is-4"><a @click.prevent="modalAction" :data-id="item[0]" href="#" class="app-links" v-html="item[1].title"></a></p>
        <div class="has-text-centered" v-html="item[1].description"></div>
      </div>
    </div>

    <modal v-if="status" :class="{'is-active': status}" @disable="updateModal" :modalAttrs="modalAttrs"></modal>
  </div>
</template>

<script>
  import Modal from '@/components/Modal'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        status: false,
        modalAttrs: null
      }
    },
    updated () {
      console.log('derp')
    },
    methods: {
      modalAction: function (event) {
        this.modalAttrs = this.workData[event.target.dataset.id]
        document.documentElement.classList.add('is-clipped')
        this.updateModal()
      },
      updateModal: function () {
        this.status = !this.status
      },
      applyPadding: function () {
        if (this.getWidth() > 768) {
          return 'pb'
        }
        return ''
      },
      getWidth: function () {
        return Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.documentElement.clientWidth
        )
      }
    },
    components: {
      'modal': Modal
    },
    computed: {
      ...mapGetters([
        'workData'
      ]),
      firstHalfOfProjects: function () {
        return Object.entries(this.workData).slice(0, (Object.keys(this.workData).length / 2))
      },
      secondHalfOfProjects: function () {
        return Object.entries(this.workData).slice((Object.keys(this.workData).length / 2), Object.keys(this.workData).length)
      }
    }
  }
</script>
