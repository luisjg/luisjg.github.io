<template>
  <div id="education">
    <section class="section">
      <div class="container">
        <h2 class="title">
          Education
        </h2>
        <p class="subtitle">
          Where I Studied
        </p>
      </div>
    </section>
    <div class="columns is-centered">
      <div class="column is-one-quarter">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/gcc.png" :alt="json.gcc.title +' image'">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction" id="gcc" href="#" v-html="json.gcc.title"></a></p>
              <span v-html="json.gcc.description"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/csun.png" :alt="json.gcc.title +' image'">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction"  id="csun" href="#" v-html="json.csun.title"></a></p>
              <span v-html="json.csun.description"></span>
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
        json: null,
        status: false,
        modalAttrs: {
          title: '',
          body: '',
          url: ''
        }
      }
    },
    created () {
      this.json = this.$store.getters.getSchoolData
    },
    methods: {
      modalAction: function (event) {
        this.modalAttrs.title = this.json[event.target.id].title
        this.modalAttrs.body = this.json[event.target.id].details
        this.modalAttrs.url = this.generateUrls(event.target.id)
        document.documentElement.classList.add('is-clipped')
        this.updateModal()
      },
      generateUrls: function (name) {
        if (name === 'gcc') {
          return 'https://www.glendale.edu/'
        }
        return 'https://www.csun.edu'
      },
      updateModal: function () {
        this.status = !this.status
      }
    },
    components: {
      'modal': Modal
    }
  }
</script>
