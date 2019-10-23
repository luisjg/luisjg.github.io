<template>
  <div id="experience">
    <section class="section">
      <div class="container">
        <h2 class="title">
          Experience
        </h2>
        <p class="subtitle">
          What I Contribute
        </p>
      </div>
    </section>

    <div class="columns is-centered is-mobile pb-4">
      <div class="column is-two-thirds-desktop is-four-fifths-mobile">
        <div class="is-size-4">
          <h3 class="has-text-weight-bold">Web Developer at California State University, Northridge | Northridge CA</h3>
          <p>November 2015 - Present</p>
          <ul>
            <li v-for="(item, value) in experienceData" :key="value">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .is-size-4-desktop p {
    padding-top: 0.5rem;
  }
  li {
    list-style: square;
    margin-left: 1.20rem;
    padding-left: 1rem;
    margin-top: .5rem;
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
