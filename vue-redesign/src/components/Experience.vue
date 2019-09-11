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

    <div class="columns is-centered is-mobile pb-3">
      <div class="column is-two-thirds-desktop is-four-fifths-mobile">
        <div class="is-size-4">
          <h3 class="has-text-weight-bold">Web Developer at California State University, Northridge | Northridge CA</h3>
          <p>November 2015 - Present</p>
          <ul>
            <li>Authored and maintained documentation.</li>
            <li>Worked with clients to develop product backlogs.</li>
            <li>Implemented and enforced a change management workflow.</li>
            <li>Lead of testing, accessibility, usability, and security.</li>
            <li>Designed and developed REST APIs used accross the university.</li>
            <li>Wrote clean, maintainable, and testable code on production level applications and APIs.</li>
            <li>Coordinated and supervised junior developers in all aspects of web development and software engineering.</li>
            <li>Project lead and Scrum Master of successfully deployed web applications that met or exceeded client's expectations.</li>
            <li>Developed training procedures and materials for junior developers in the proper use of Git, Scrum, LAMP, MySQL, MVVM, and MVC frameworks.</li>
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
