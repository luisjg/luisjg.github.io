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

    <div class="columns is-centered">
      <div class="columns">
        <div class="column is-one-quarter">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/faculty.png" alt="Faculty Application image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction" id="faculty" href="#" class="app-links" v-html="json['faculty'].title"></a></p>
                <span v-html="json['faculty'].description"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/scholarship.png" alt="Scholarship Application image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction" id="scholarship" href="#" class="app-links" v-html="json['scholarship'].title"></a></p>
                <span v-html="json['scholarship'].description"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/aa2.png" alt="Equity and Diversity Application image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction" id="aa2" href="#" class="app-links" v-html="json['aa2'].title"></a></p>
                <span v-html="json['aa2'].description"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="../assets/etd.png" alt="Metalab Website image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction" id="etd" href="#" class="app-links" v-html="json['etd'].title"></a></p>
                <span v-html="json['etd'].description"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <modal v-bind:class="{'is-active': status}" v-on:disable="updateModal" v-bind:modalAttrs="modalAttrs"></modal>
</div>
</template>

<script>
  import Modal from '@/components/Modal'
  export default {
    data () {
      return {
        json: '',
        status: false,
        modalAttrs: {
          title: '',
          body: '',
          url: ''
        }
      }
    },
    created () {
      this.json = JSON.parse(sessionStorage.getItem('work'))
    },
    methods: {
      modalAction: function (event) {
        this.modalAttrs.title = this.json[event.target.id].title
        this.modalAttrs.body = this.json[event.target.id].details
        this.modalAttrs.url = '//www.metalab.csun.edu/' + this.generateUrls(event.target.id)
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
    }
  }
</script>
