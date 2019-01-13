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

    <div class="columns is-centered pb">
      <!-- <div v-for="item in this.shortenedArray" :key="item" class="colum is-one-fifth-desktop is-one-half-tablet">
        {{ item }}
      </div> -->
      <div class="column is-one-fifth-desktop is-one-half-tablet">
        <figure class="image">
          <img src="../assets/faculty.png" alt="cars">
        </figure>
        <p class="has-text-centered title is-4"><a @click.prevent="modalAction" id="faculty" href="#" class="app-links" v-html="workData.faculty.title"></a></p>
        <div class="has-text-centered" v-html="workData.faculty.description"></div>
      </div>
      <div class="column is-one-fifth-desktop is-one-half-tablet">
        <figure class="image">
          <img src="../assets/scholarship.png" alt="photography">
        </figure>
        <p class="has-text-centered title is-4"><a @click.prevent="modalAction" id="scholarship" href="#" class="app-links" v-html="workData.scholarship.title"></a></p>
        <div class="has-text-centered" v-html="workData.scholarship.description"></div>
      </div>
      <div class="column is-one-fifth-desktop is-one-half-tablet">
        <figure class="image">
          <img src="../assets/etd.png" alt="music">
        </figure>
        <p class="has-text-centered title is-4"><a @click.prevent="modalAction" id="etd" href="#" class="app-links" v-html="workData.etd.title"></a></p>
        <div class="has-text-centered" v-html="workData.etd.description"></div>
      </div>
      <div class="column is-one-fifth-desktop is-one-half-tablet">
        <figure class="image">
          <img src="../assets/aa2.png" alt="music">
        </figure>
        <p class="has-text-centered title is-4"><a @click.prevent="modalAction" id="aa2" href="#" class="app-links" v-html="workData.aa2.title"></a></p>
        <div class="has-text-centered" v-html="workData.aa2.description"></div>
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
        modalAttrs: null,
        shuffled: null
      }
    },
    // created () {
    //   this.fisherYatesShuffle(Object.keys(this.workData))
    // },
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
      },
      fisherYatesShuffle: function (array) {
        let i = array.length
        let j = 0
        let temp
        while (i--) {
          j = Math.floor(Math.random() * (i + 1))
          // swap randomly chosen element with current element
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
        this.shuffled = array
      }
    },
    components: {
      'modal': Modal
    },
    computed: {
      ...mapGetters([
        'workData'
      ]),
      shortenedArray: function () {
        let halfLength = Math.ceil(this.shuffled.length / 2)
        return this.shuffled.splice(0, halfLength)
      }
    }
  }
</script>
