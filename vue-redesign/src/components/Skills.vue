<template>
  <div id="experience">
    <section class="section">
      <div class="container">
        <h2 class="title">
          Skills
        </h2>
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
              <i class="fab fa-7x fa-laravel russian-green"></i>
              <p class="title is-4 pt-1-half">Back End</p>
              <div>
                Modern Web Applications, APIs
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="fab fa-7x fa-js-square russian-green"></i>
              <p class="title is-4 pt-1-half">Front End</p>
              <div>
                HTML, CSS, JQuery, Vue.js, Socket.io
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="fas fa-7x fa-conveyor-belt-alt russian-green"></i>
              <p class="title is-4 pt-1-half">CI/CD</p>
              <div>
                Travis CI, GitHub Actions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-centered pt-1-half pb-3">
      <div class="column is-half">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="fas fa-7x fa-database russian-green"></i>
              <p class="title is-4 pt-1-half">Database</p>
              <div>
                MongoDB, MySQL, Redis
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="far fa-7x fa-code-branch russian-green"></i>
              <p class="title is-4 pt-1-half">Version Control</p>
              <div>
                Git, GitHub
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="fad fa-7x fa-server russian-green"></i>
              <p class="title is-4 pt-1-half">DevOps</p>
              <div>
                Docker, Kubernetes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .progress.is-deep-lilac::-webkit-progress-value {
    background-color: #9b64bc;
  }
  .progress.is-deep-lilac::-moz-progress-bar {
    background-color: #9b64bc;
  }
  .progress.is-deep-lilac::-ms-fill {
    background-color: #9b64bc;
  }
  .progress.is-mummys-tomb::-webkit-progress-value {
    background-color: #808D8E;
  }
  .progress.is-mummys-tomb::-moz-progress-bar {
    background-color: #808D8E;
  }
  .progress.is-mummys-tomb::-ms-fill {
    background-color: #808D8E;
  }
  .progress.is-blue-bell::-webkit-progress-value {
    background-color: #A3A5C3;
  }
  .progress.is-blue-bell::-moz-progress-bar {
    background-color: #A3A5C3;
  }
  .progress.is-blue-bell::-ms-fill {
    background-color: #A3A5C3;
  }
  .progress.is-old-lavender::-webkit-progress-value {
    background-color: #766C7F;
  }
  .progress.is-old-lavender::-moz-progress-bar {
    background-color: #766C7F;
  }
  .progress.is-old-lavender::-ms-fill {
    background-color: #766C7F;
  }
  .progress.is-russian-green::-webkit-progress-value {
    background-color: #6d9f71;
  }
  .progress.is-russian-green::-moz-progress-bar {
    background-color: #6d9f71;
  }
  .progress.is-russian-green::-ms-fill {
    background-color: #6d9f71;
  }
  .progress.is-pastel-blue::-webkit-progress-value {
    background-color: #A9D2D5;
  }
  .progress.is-pastel-blue::-moz-progress-bar {
    background-color: #A9D2D5;
  }
  .progress.is-pastel-blue::-ms-fill {
    background-color: #A9D2D5;
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
