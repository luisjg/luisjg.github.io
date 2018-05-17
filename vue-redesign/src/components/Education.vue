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
              <img src="../assets/gcc.png" :alt="schoolData.gcc.title +' image'">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction" id="gcc" href="#" v-html="schoolData.gcc.title"></a></p>
              <span v-html="schoolData.gcc.description"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/csun.png" :alt="schoolData.gcc.title +' image'">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <p class="has-text-centered title is-4"><a v-on:click.prevent="modalAction"  id="csun" href="#" v-html="schoolData.csun.title"></a></p>
              <span v-html="schoolData.csun.description"></span>
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
        this.modalAttrs = this.schoolData[event.target.id]
        document.documentElement.classList.add('is-clipped')
        this.updateModal()
      },
      updateModal: function () {
        this.status = !this.status
      }
    },
    components: {
      'modal': Modal
    },
    computed: {
      ...mapGetters([
        'schoolData'
      ])
    }
  }
</script>
