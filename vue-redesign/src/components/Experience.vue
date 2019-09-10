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

    <div class="columns is-centered pb-3">
      <div class="column is-two-thirds-desktop is-four-fifths-mobile">
        <div class="is-size-4-desktop">
          <h3 class="has-text-weight-bold"><u>Web Developer</u> at CSU Northridge, Northridge CA</h3>
          <p>November 2015 - Present</p>
          <ul>
            <li>Work with clients to develop product backlogs.</li>
            <li>Authored and maintained documentation.</li>
            <li>Implement and adhere to change management workflow.</li>
            <li>Designed and developed REST APIs used accross the university.</li>
            <li>In charge of testing accessibility, usability, and security.</li>
            <li>Mentored over 40 junior developers.</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
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
