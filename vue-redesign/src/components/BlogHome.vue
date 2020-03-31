<template>
  <div id="blog">
    <template v-if="posts == null">
      <coming-soon/>
    </template>

    <template v-else >
      <section id="blog-section" class="section">
        <div class="container">
          <h1 class="title">
            Blog
          </h1>
          <p class="subtitle">
            Things I Write
          </p>
        </div>
      </section>

        <div class="columns is-centered pb-4">
          <div v-for="(post,index) in posts" :key="post.slug + '_' + index" class="column is-one-fifth-desktop is-one-half-table">
            <figure class="image is-128x128 is-image-centered">
              <router-link :to="'/blog/' + post.slug">
                <img :src="post.featured_image" :alt="post.title + ' fatured image'">
              </router-link>
            </figure>
            <p class="has-text-centered title is-title-truncated is-4">
              <router-link :to="'/blog/' + post.slug">
                {{ post.title }}
              </router-link>
            </p>
            <div class="has-text-centered" v-html="post.summary"></div>
          </div>
        </div>
    </template>

  </div>
</template>

<style scoped>
  .is-image-centered {
    margin: auto;
  }
  .is-title-truncated {
    width: 20rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<script>
import moment from 'moment'
import { mapActions, mapGetters } from 'vuex'
export default {
  created () {
    if (this.butter === false) {
      this.initializeButterCms()
    }
  },
  methods: {
    ...mapActions([
      'initializeButterCms'
    ]),
    // formatDate (value) {
    //   return moment(value).format('MMMM Do, YYYY')
    // },
    applyPadding: function () {
      if (this.getWidth() > 768) {
        return 'pb'
      }
      return ''
    },
    getWidth: function () {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      )
    }
  },
  components: {
    'coming-soon': () => import('@/components/ComingSoon')
  },
  computed: {
    ...mapGetters([
      'butter',
      'posts'
    ]),
    fomatDate (value) {
      return moment(value).format('MMMM Do, YYYY')
    }
  }
}
</script>
