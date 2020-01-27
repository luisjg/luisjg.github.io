<template>
  <div id="education">
    <section class="section">
      <div class="container">
        <h1 class="title">
          Education
        </h1>
        <p class="subtitle">
          Where I Studied
        </p>
      </div>
    </section>

    <div class="columns is-centered pb-4">
      <div class="column is-two-fifths-desktop is-half-tablet">
        <p class="has-text-centered title is-4"><a href="#" id="csun" data-id="csun" @click.prevent="modalAction">{{ schoolData.csun.title }}</a></p>
        <div class="timeline is-centered">
          <header class="timeline-header">
            <span class="tag is-medium is-primary">Start</span>
          </header>
          <div class="timeline-item">
            <div class="timeline-marker is-blue-bell">
            </div>
            <div class="timeline-content">
              <p class="heading">August 2013</p>
              <p>Became first generation enrolled in a Univeristy.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker is-blue-bell">
            </div>
            <div class="timeline-content">
              <p class="heading">February 2016</p>
              <p>Student Assistant at <a href="https://www.metalab.csun.edu" rel="noreferrer" class="has-text-weight-bold" target="_blank" aria-label="Visit the META+LAB website">CSUN META<span class="red-text">+</span>LAB</a>.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker is-blue-bell">
            </div>
            <div class="timeline-content">
              <p class="heading">May 2016</p>
              <p>Earned a B.S. in Computer Science.</p>
            </div>
          </div>
          <div class="timeline-header">
            <span class="tag is-medium is-primary">End</span>
          </div>
        </div>
      </div>

      <div class="column is-half-tablet is-hidden-tablet">
        <div class="is-divider"></div>
      </div>

      <div class="column is-two-fifths-desktop is-half-tablet pb-4">
        <p class="has-text-centered title is-4"><a href="#" id="gcc" data-id="gcc" @click.prevent="modalAction">{{ schoolData.gcc.title }}</a></p>
        <div class="timeline is-centered">
        <header class="timeline-header is-icon">
          <span class="tag is-medium is-primary">Start</span>
        </header>
        <div class="timeline-item">
          <div class="timeline-marker is-blue-bell">
          </div>
          <div class="timeline-content">
            <p class="heading">August 2005</p>
            <p>Start General Education focusing on Math.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker is-blue-bell">
          </div>
          <div class="timeline-content">
            <p class="heading">August 2010</p>
            <p>Start enrolling in classes for Computer Science.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker is-blue-bell">
          </div>
          <div class="timeline-content">
            <p class="heading">May 2013</p>
            <p>Completed the CSU General Education.</p>
          </div>
        </div>
        <div class="timeline-header">
          <span class="tag is-medium is-primary">End</span>
        </div>
      </div>
    </div>
  </div>

  <modal v-if="status" :class="{'is-active': status}" @disable="updateModal" :modalAttrs="modalAttrs"></modal>
  </div>
</template>

<style scoped>
  .tag:not(body).is-primary {
    background-color: #6d9f71;
    color: white;
  }
  .timeline .timeline-item .timeline-marker.is-blue-bell {
    background-color: #A3A5C3!important;
    border-color: #A3A5C3!important;
  }
  .purple-text {
    color: #9b4dca;
  }
</style>

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
        this.modalAttrs = this.schoolData[event.target.dataset.id]
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
        'schoolData'
      ])
    }
  }
</script>
