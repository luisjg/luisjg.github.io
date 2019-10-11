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
              <i class="fab fa-7x fa-laravel"></i>
              <div>
                Modern Web Applications, APIs
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="fab fa-7x fa-js-square"></i>
              <div>
                HTML, CSS, JQuery, Vue.js, Socket.io
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="fab fa-7x fa-jenkins"></i>
              <div>
                Travis CI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-centered">
      <div class="column is-half">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="fas fa-7x fa-database"></i>
              <div>
                MySQL, Reids
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="far fa-7x fa-code-branch"></i>
              <div>
                Git, GitHub
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="has-text-centered">
              <i class="fab fa-7x fa-docker"></i>
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
