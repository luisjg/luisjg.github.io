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
      <div class="column is-two-thirds-desktop is-four-fifths-mobile is-size-4-desktop">
        <h3 class="has-text-left has-text-weight-bold"><u>Web Developer</u></h3>
        <div class="has-text-left">CSU Northridge, Northridge CA</div>
        <div class="has-text-left">November 2015 - Present</div>
        <ul>
          <li>Work with clients to develop product backlogs.</li>
          <li>Authored and maintained documentation.</li>
          <li>Implement and adhrere to change management workflow.</li>
          <li>Designed and developed REST APIs used accross the University.</li>
          <li>In charge of testing accessibility, usability, and security.</li>
          <li>Mentored over 40 junior developers.</li>
        </ul>
      </div>
    </div>

    <div class="columns is-centered pb-3">
      <div class="column is-half">
        <div class="columns is-two-thirds">
          <div class="column">
            <figure class="logo">
              <img class="image" src="https://res.cloudinary.com/dfhliq7vp/image/upload/v1547608037/luisjg/IT_Vertical_186_Black.svg" width="55%" alt="CSUN Central IT logo">
            </figure>
          </div>
          <div class="column">
            <div class="is-size-4">
              <h3 class="has-text-left"><strong>Web Developer</strong></h3>
              <p>at CSU, Northridge</p>
              <p class="has-text-left is-size-5">November 2015 - Present</p>
              <ul>
                <li>Work with clients to develop product backlogs.</li>
                <li>Authored and maintained documentation.</li>
                <li>Implement and adhrere to change management workflow.</li>
                <li>Designed and developed REST APIs used accross the University.</li>
                <li>In charge of testing accessibility, usability, and security.</li>
                <li>Mentored over 40 junior developers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  li {
    margin: 0rem;
    list-style: none;
  }
  .logo {
    margin-top: 3.5rem;
  }
  .logo img {
    float: right;
  }
  @media screen and (max-width: 768px) {
    .logo {
      margin-top: 0rem;
    }
    .logo img {
      float: none;
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
