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
              <span @click="hamburgerToggle()" :class="{'is-active': isActive }" class="navbar-burger burger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div v-bind:class="{'is-active': isActive }" class="navbar-menu">
              <div class="navbar-end">
                <router-link @click.native="hamburgerToggle()" to="/" exact-active-class="is-active has-text-weight-bold has-text-white" class="navbar-item">
                  Home
                </router-link>
                <router-link @click.native="hamburgerToggle()" to="/portfolio" active-class="is-active has-text-weight-bold has-text-white" class="navbar-item">
                  Portfolio
                </router-link>
                <router-link @click.native="hamburgerToggle()" to="/experience" active-class="is-active has-text-weight-bold has-text-white" class="navbar-item">
                  Experience
                </router-link>
                <router-link @click.native="hamburgerToggle()" to="/hobbies" active-class="is-active has-text-weight-bold has-text-white" class="navbar-item">
                  Hobbies
                </router-link>
                <router-link @click.native="hamburgerToggle()" to="/education" active-class="is-active has-text-weight-bold has-text-white" class="navbar-item">
                  Education
                </router-link>
                <router-link @click.native="hamburgerToggle()" to="/blog" exact-active-class="is-active has-text-weight-bold has-text-white" class="navbar-item">
                  Blog
                </router-link>
                <!-- <router-link @click.native="hamburgerToggle()" to="/resume" exact-active-class="is-active has-text-weight-bold has-text-white" class="navbar-item">
                  Resume
                </router-link> -->
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <figure class="image" :class="switchImageStyle()">
            <img src="https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432443/luisjg/profile.jpg" class="is-rounded" alt="profile image">
          </figure>
          <ul id="tag-lines" class="is-size-4-desktop">
            <li style="padding-top:0.4rem;padding-bottom:0.3rem;">
              <a class="button is-primary" href="https://drive.google.com/file/d/1LV7U0QFGkmNHzw6lV_IGIku2QhcCnQMs/view?usp=sharing" target="_blank" rel="noreferrer"><i class="fas fa-file-download" aria-disabled="true"></i>&nbsp;&nbsp;View Resume</a>
            </li>
            <li>
              <i class="russian-green fas fa-map-marker-alt" aria-hidden="true"></i> Los Angeles, CA
            </li>
            <li>
              <i class="russian-green fas fa-graduation-cap" aria-hidden="true"></i> Computer Science, BS
            </li>
            <li>
              <i class="russian-green fas fa-briefcase" aria-hidden="true"></i> Web Developer &amp; Mentor,
              CSUN META<span class="red-text">+</span>LAB
            </li>
          </ul>
        </div>
      </div>
    </section>
</template>

<style scoped>
  @media screen and (min-width: 769px), print {
    .hero.is-medium .hero-body {
        padding-bottom: 3rem;
        padding-top: 3rem;
    }
  }
  @media screen and (max-width: 1087px) {
    .hero.is-light .navbar-menu {
        background-color: #f6f8fa;
    }
  }
  @media screen and (max-width: 768px) {
    .hero.is-light.is-bold .navbar-menu {
        background-image: none;
    }
  }
  #tag-lines {
    padding-top: .5rem;
  }
  .image {
    margin: auto;
  }
  .hero.is-light.is-bold {
    background-image: none;
    background-color: #f6f8fa;
  }
  .hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {
  background-color: #766C7F;
  border-color: #766C7F;
  color: whitesmoke;
  }
  .hero.is-light a.navbar-item:hover, .navbar-link:hover {
    background-color: rgba(10, 10, 10, 0.1);
    border-radius: 4px;
  }
  .hero.is-light a.navbar-item.is-active,
  .hero.is-light .navbar-link.is-active {
    background-color: #766C7F;
    border-radius: 4px;
  }
  .hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {
    border-radius: 4px;
  }
  .tabs.is-boxed a {
    border-radius: 4px;
  }
  .button.is-primary {
    background-color: #766c7f;
    color: whitesmoke;
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
        if (this.$route.name !== 'home' && this.$route.name !== '404' && this.$route.name !== 'blog' && this.$route.name !== 'resume') {
          return 'is-active has-text-weight-bold has-text-white'
        } else {
          return ''
        }
      },
      hamburgerToggle: function () {
        if (this.getWidth() <= 1087) {
          this.isActive = !this.isActive
        }
      },
      toggleHeroFooter: function () {
        if (this.$route.name !== 'home' && this.$route.name !== '404' && this.$route.name !== 'blog' && this.$route.name !== 'resume') {
          return true
        } else {
          return false
        }
      },
      getWidth: function () {
        return Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.documentElement.clientWidth
        )
      },
      switchImageStyle: function () {
        if (this.getWidth() <= 480) {
          return 'is-96x96'
        }
        return 'is-128x128'
      }
    }
  }
</script>
