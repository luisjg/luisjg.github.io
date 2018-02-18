<template>
    <section class="hero is-medium is-light is-bold">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <router-link to="/" class="navbar-item">
                <span class="is-size-4 has-text-weight-bold">luisjg.io</span>
              </router-link>
              <span v-on:click="hamburger" v-bind:class="{'is-active': isActive }" class="navbar-burger burger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div v-bind:class="{'is-active': isActive }" class="navbar-menu">
              <div class="navbar-end">
                <router-link v-on:click.native="hamburger" to="/" v-bind:class="checkActive('home')" class="navbar-item">
                  Home
                </router-link>
                <router-link v-on:click.native="hamburger" to="portfolio" v-bind:class="checkActive('info')" class="navbar-item">
                  About
                </router-link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <figure>
            <img src="../assets/profile.jpg" class="profile-img" alt="profile image" width="10%">
          </figure>
          <ul class="subtitle">
            <li>
              <i class="lilac-text fa fa-map-marker" aria-hidden="true"></i> Los Angeles, CA
            </li>
            <li>
              <i class="lilac-text fa fa-graduation-cap" aria-hidden="true"></i> Computer Science, BS
            </li>
            <li>
              <i class="lilac-text fa fa-briefcase" aria-hidden="true"></i> Web Developer &amp; Mentor @
              META<span class="red-text">+</span>LAB
            </li>
          </ul>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div v-show="section !== 'home'" class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li v-bind:class="checkActive('portfolio')">
                <router-link to="portfolio">Portfolio</router-link>
              </li>
              <li v-bind:class="checkActive('experience')">
                <router-link to="experience">Experience</router-link>
              </li>
              <li v-bind:class="checkActive('hobbies')">
                <router-link to="hobbies">Hobbies</router-link>
              </li>
              <li v-bind:class="checkActive('education')">
                <router-link to="education">Education</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
</template>

<style scoped>
  .profile-img {
    border-radius: 50%;
  }
</style>

<script>
  export default {
    data () {
      return {
        section: String,
        isActive: false
      }
    },
    methods: {
      checkActive: function (section) {
        this.section = this.$route.name
        if (this.$route.name === section) {
          return 'is-active'
        } else if (this.$route.name !== 'home' && section === 'info') {
          return 'is-active'
        }
      },
      hamburger: function (event) {
        this.isActive = !this.isActive
      }
    }
  }
</script>
