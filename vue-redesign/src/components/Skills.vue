<template>
  <div id="experience">
    <section class="section">
      <div class="container">
        <h1 class="title">
          Skills
        </h1>
        <p class="subtitle">
          Tools I Know
        </p>
      </div>
    </section>

    <div class="columns is-centered">
      <div class="column is-half">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="fad fa-7x fa-laptop-code russian-green" aria-hidden="true"></i>
              <p class="title is-4 pt-1-half">Back End</p>
              <div>
                PHP, Laravel, Lumen, REST APIs
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered padded--top__mobile">
              <i class="fad fa-7x fa-browser russian-green" aria-hidden="true"></i>
              <p class="title is-4 pt-1-half">Front End</p>
              <div>
                HTML, CSS, JQuery, Vue.js, Socket.io
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered padded--top__mobile">
              <i class="fad fa-7x fa-conveyor-belt-alt russian-green" aria-hidden="true"></i>
              <p class="title is-4 pt-1-half">CI/CD</p>
              <div>
                Travis CI, GitHub Actions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-centered">
      <div class="column is-half">
        <div class="columns is-centered pb-4">
          <div class="column is-half">
            <div class="has-text-centered padded--top">
              <i class="fad fa-7x fa-database russian-green" aria-hidden="true"></i>
              <p class="title is-4 pt-1-half">Database</p>
              <div>
                MongoDB, MySQL, Redis
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered padded--top">
              <i class="fad fa-7x fa-code-branch russian-green" aria-hidden="true"></i>
              <p class="title is-4 pt-1-half">Version Control</p>
              <div>
                Git, GitHub
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered padded--top">
              <i class="fad fa-7x fa-server russian-green" aria-hidden="true"></i>
              <p class="title is-4 pt-1-half">DevOps</p>
              <div>
                Docker, Ubuntu, Kubernetes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .padded--top {
    padding-top: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    .padded--top__mobile {
      padding-top: 1.5rem;
    }
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'experienceData'
      ])
    }
  }
</script>
