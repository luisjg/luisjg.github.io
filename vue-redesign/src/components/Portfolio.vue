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

    <div class="section">
      <div class="columns is-centered">
        <div class="columns">
          <div class="column is-offset-1 is-one-fifth-desktop is-one-half-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="../assets/faculty.png" :alt="workData.faculty.title + ' image'">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="has-text-centered title is-4"><a @click.prevent="modalAction" id="faculty" href="#" class="app-links" v-html="workData.faculty.title"></a></p>
                  <span v-html="workData.faculty.description"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-fifth-desktop is-one-half-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="../assets/scholarship.png" :alt="workData.scholarship.title + ' image'">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="has-text-centered title is-4"><a @click.prevent="modalAction" id="scholarship" href="#" class="app-links" v-html="workData.scholarship.title"></a></p>
                  <span v-html="workData.scholarship.description"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-fifth-desktop is-one-half-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="../assets/aa2.png" :alt="workData.aa2.title + ' image'">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="has-text-centered title is-4"><a @click.prevent="modalAction" id="aa2" href="#" class="app-links" v-html="workData.aa2.title"></a></p>
                  <span v-html="workData.aa2.description"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-fifth-desktop is-one-half-tablet">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="../assets/etd.png" :alt="workData.etd.title + ' image'">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="has-text-centered title is-4"><a @click.prevent="modalAction" id="etd" href="#" class="app-links" v-html="workData.etd.title"></a></p>
                  <span v-html="workData.etd.description"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    methods: {
      modalAction: function (event) {
        this.modalAttrs = this.workData[event.target.id]
        document.documentElement.classList.add('is-clipped')
        this.updateModal()
      },
      updateModal: function () {
        this.status = !this.status
      },
      generateUrls: function (name) {
        if (name === 'scholarship') {
          return 'faculty/beta/' + name
        }
        return name
      }
    },
    components: {
      'modal': Modal
    },
    computed: {
      ...mapGetters([
        'workData'
      ])
    }
  }
</script>
