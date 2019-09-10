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
            <li>Worked with clients to develop product backlogs.</li>
            <li>Authored and maintained documentation.</li>
            <li>Implemented and enforced a change management workflow.</li>
            <li>Designed and developed REST APIs used accross the university.</li>
            <li>Lead of testing accessibility, usability, and security.</li>
            <li>Coordinated and supervised junior developers engaged in web development and software engineering principles.</li>
            <li>Developed training procedures and materials for junior developers in the proper use of git, Scrum, and MVC frameworks.</li>
            <li>Project lead of successfully deployed web applications that met or exceeded client's expectations.</li>
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
