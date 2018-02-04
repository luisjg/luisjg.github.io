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
              <img src="../assets/gcc.png" alt="Glendale Community College image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction" id="gcc" href="#">Glendale Community College</a></p>
              <span v-html="json['gcc']['description']"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/csun.png" alt="California State University, Northridge image">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction"  id="csun" href="#">Cal State University, Northridge</a></p>
              <span v-html="json['csun']['description']"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal v-bind:class="{'is-active': modalAttrs.status}" v-on:disable="updateModal" v-bind:modalAttrs="modalAttrs"></modal>
  </div>
</template>

<script>
  import Modal from '@/components/Modal'
  export default {
    data () {
      return {
        json: '',
        modalAttrs: {
          title: '',
          body: '',
          status: false
        }
      }
    },
    created () {
      this.json = JSON.parse(sessionStorage.getItem('education'))
    },
    methods: {
      modalAction: function (event) {
        this.modalAttrs.title = event.srcElement.outerText
        this.modalAttrs.body = this.json[event.target.id]['details']
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
        this.modalAttrs.status = !this.modalAttrs.status
      }
    },
    components: {
      'modal': Modal
    }
  }
</script>
