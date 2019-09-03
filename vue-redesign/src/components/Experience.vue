<template>
  <div id="experience">
    <section class="section">
      <div class="container">
        <h2 class="title">
          Experience
        </h2>
        <p class="subtitle">
          Tools I Know
        </p>
      </div>
    </section>

    <div class="columns pb">
      <div class="column is-5 is-offset-2-desktop is-offset-2-tablet">
        <div class="column is-6">
          <span class="has-text-weight-bold">LARAVEL</span><span class="has-text-weight-bold is-pulled-right"> {{ experienceData.laravel }}</span> <progress class="progress is-deep-lilac" :value="experienceData.laravel" max="100">asdfasdf</progress>
        </div>
        <div class="column is-6">
          <span class="has-text-weight-bold">PHP</span><span class="has-text-weight-bold is-pulled-right"> {{ experienceData.php }}</span> <progress class="progress is-blue-bell" :value="experienceData.php" max="100">{{experienceData.php}}%</progress>
        </div>
        <div class="column is-6">
          <span class="has-text-weight-bold">HTML</span><span class="has-text-weight-bold is-pulled-right"> {{ experienceData.html }}</span> <progress class="progress is-old-lavender" :value="experienceData.html" max="100">{{experienceData.html}}%</progress>
        </div>
        <div class="column is-6">
          <span class="has-text-weight-bold">JAVASCRIPT</span><span class="has-text-weight-bold is-pulled-right"> {{ experienceData.javascript }}</span> <progress class="progress is-russian-green" :value="experienceData.javascript" max="100">{{experienceData.javascript}}%</progress>
        </div>
      </div>
      <div class="column is-5">
        <div class="column is-6">
          <span class="has-text-weight-bold">LINUX</span><span class="has-text-weight-bold is-pulled-right"> {{ experienceData.linux }}</span> <progress class="progress is-deep-lilac" :value="experienceData.linux" max="100">{{experienceData.linux}}%</progress>
        </div>
        <div class="column is-6">
          <span class="has-text-weight-bold">MYSQL</span><span class="has-text-weight-bold is-pulled-right"> {{ experienceData.mysql }}</span> <progress class="progress is-blue-bell" :value="experienceData.mysql" max="100">{{experienceData.mysql}}%</progress>
        </div>
        <div class="column is-6">
          <span class="has-text-weight-bold">VUE</span><span class="has-text-weight-bold is-pulled-right"> {{ experienceData.vue }}</span> <progress class="progress is-old-lavender" :value="experienceData.vue" max="100">{{experienceData.vue}}%</progress>
        </div>
        <div class="column is-6">
          <span class="has-text-weight-bold">CSS</span><span class="has-text-weight-bold is-pulled-right"> {{ experienceData.css }}</span> <progress class="progress is-russian-green" :value="experienceData.css" max="100">{{experienceData.css}}%</progress>
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

