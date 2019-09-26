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
            <li>Project lead and Scrum Master of successfully deployed web applications that met or exceeded client's expectations.</li>
            <li>Gathered requirements and feedback from clients in weekly meetings and application demos to develop and refine product backlogs.</li>
            <li>Lead designer and developer of eight REST APIs deployed in production environments with over 13 million successful requests used across multiple university web applications.</li>
            <li>Designed and developed REST APIs used across multiple university web applications.</li>
            <li>Developed on 11 production applications using LAMP, Laravel MVC framework, HTML, CSS, JavaScript, and MySQL for resource management.</li>
            <li>Maintained and redesigned legacy code by applying best practices which improved overall application speed and user satisfaction.</li>
            <li>Collaborated with the operations team to analyze and identify issues with the web applications, databases, and server configuration.</li>
            <li>Used test-driven development to write clean, maintainable, and testable code on production-level applications and APIs.</li>
            <li>Developed training procedures and materials for junior developers in the proper use of Git, Scrum, LAMP, MySQL, MVVM, and MVC frameworks.</li>
            <li>Trained and supervised junior developers on web development and software engineering from initial design to final delivery.</li>
            <li>Established and maintained documentation standards for applications and web APIs.</li>
            <li>Implemented and enforced a change management workflow system for all the development teams and projects.</li>
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
