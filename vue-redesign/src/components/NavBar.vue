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
              <span v-on:click="hamburgerToggle()" v-bind:class="{'is-active': isActive }" class="navbar-burger burger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div v-bind:class="{'is-active': isActive }" class="navbar-menu">
              <div class="navbar-end">
                <router-link v-on:click.native="hamburgerToggle()" to="/" exact-active-class="is-active" class="navbar-item">
                  Home
                </router-link>
                <router-link v-on:click.native="hamburgerToggle()" to="/portfolio" v-bind:class="applyActive()" class="navbar-item">
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
              <i class="russian-green fa fa-map-marker" aria-hidden="true"></i> Los Angeles, CA
            </li>
            <li>
              <i class="russian-green fa fa-graduation-cap" aria-hidden="true"></i> Computer Science, BS
            </li>
            <li>
              <i class="russian-green fa fa-briefcase" aria-hidden="true"></i> Web Developer &amp; Mentor,
              CSUN META<span class="red-text">+</span>LAB
            </li>
          </ul>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div v-if="toggleHeroFooter()" class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li v-bind:class="checkActiveTab('portfolio')">
                <router-link to="portfolio">Portfolio</router-link>
              </li>
              <li v-bind:class="checkActiveTab('experience')">
                <router-link to="experience">Experience</router-link>
              </li>
              <li v-bind:class="checkActiveTab('hobbies')">
                <router-link to="hobbies">Hobbies</router-link>
              </li>
              <li v-bind:class="checkActiveTab('education')">
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
  .hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {
  background-color: #766C7F;
  border-color: #766C7F;
  color: whitesmoke;
  }
  .hero.is-light a.navbar-item:hover, .navbar-link:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }
  .hero.is-light a.navbar-item.is-active,
  .hero.is-light .navbar-link.is-active {
    background-color: #766C7F;
    color: white;
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
      applyActive: function () {
        if (this.$route.name !== 'home' && this.$route.name !== '404') {
          return 'is-active'
        } else {
          return ''
        }
      },
      checkActiveTab: function (section) {
        if (this.$route.name === section) {
          return 'is-active'
        } else {
          return ''
        }
      },
      hamburgerToggle: function () {
        this.isActive = !this.isActive
      },
      toggleHeroFooter: function () {
        if (this.$route.name !== 'home' && this.$route.name !== '404') {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>
