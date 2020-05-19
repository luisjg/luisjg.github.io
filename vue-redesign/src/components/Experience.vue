<template>
  <div id="experience">
    <section class="section">
      <div class="container">
        <h1 class="title">
          Experience
        </h1>
        <p class="subtitle">
          What I Contribute
        </p>
      </div>
    </section>

    <div class="columns is-centered is-mobile pb-4">
      <div class="column is-two-thirds-desktop is-four-fifths-mobile">
        <div class="is-size-5">
          <h3 class="has-text-weight-bold">Web Developer at California State University, Northridge</h3>
          <p>November 2015 - Present</p>
          <ul>
            <li class="icons list-element" v-for="(item, value) in experienceData" :key="value"><span>{{ item }}</span></li>
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
  li span {
    color: #4a4a4a;
  }
  li {
    list-style: square;
    margin-left: 1.20rem;
    padding-left: 1rem;
    margin-top: .5rem;
    color: #6d9f71;
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
