<template>
  <div id="portfolio">
    <section id="portfolio-section" class="section">
      <div class="container">
        <h1 class="title">
          Portfolio
        </h1>
        <p class="subtitle">
          What We Built
        </p>
      </div>
    </section>

    <div class="columns is-centered">
      <div class="column is-half">
        <div class="columns is-centered">
          <div v-for="(item, value) in firstHalfOfProjects" :key="value" class="column is-half">
            <figure class="image">
              <a @click.prevent="modalAction" href="#"><img :data-id="item[0]" :src="item[1].image" :alt="item[1].title + ' App Image'"></a>
            </figure>
            <p class="has-text-centered title is-4 pt-1-half"><a @click.prevent="modalAction" :data-id="item[0]" href="#" class="app-links" v-html="item[1].title"></a></p>
            <div class="has-text-centered" v-html="item[1].description"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-centered">
      <div class="column is-half">
        <div class="columns is-centered pb-4">
          <div v-for="(item, value) in secondHalfOfProjects" :key="value" class="column is-half">
            <figure class="image">
              <a @click.prevent="modalAction" href="#"><img :data-id="item[0]" :src="item[1].image" :alt="item[1].title + ' App Image'"></a>
            </figure>
            <p class="has-text-centered title is-4 pt-1-half"><a @click.prevent="modalAction" :data-id="item[0]" href="#" class="app-links" v-html="item[1].title"></a></p>
            <div class="has-text-centered" v-html="item[1].description"></div>
          </div>
        </div>
      </div>
    </div>

    <modal v-if="status" :class="{'is-active': status}" @disable="updateModal" :modalAttrs="modalAttrs"></modal>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        status: false,
        modalAttrs: null
      }
    },
    methods: {
      modalAction: function (event) {
        this.modalAttrs = this.workData[event.target.dataset.id]
        this.modalAttrs.id = event.target.dataset.id
        document.documentElement.classList.add('is-clipped')
        this.updateModal()
      },
      updateModal: function () {
        this.status = !this.status
      }
    },
    components: {
      'modal': () => import('@/components/Modal')
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
