<template>
  <div id="blog">
    <section id="blog-section" class="section">
      <div class="container">
        <h2 class="title">
          Blog
        </h2>
        <p class="subtitle">
          Things I Write
        </p>
      </div>
    </section>

      <div class="columns is-centered" :class="applyPadding()">
        <div v-for="(post,index) in posts" :key="post.slug + '_' + index" class="column is-one-fifth-desktop is-one-half-table">
          <figure class="image">
            <router-link :to="'/blog/' + post.slug">
              <img :src="post.featured_image" :alt="post.title + ' fatured image'">
            </router-link>
          </figure>
          <p class="has-text-centered title is-4 pt">
            <router-link :to="'/blog/' + post.slug">
              {{ post.title }}
            </router-link>
          </p>
          <div class="has-text-centered" v-html="post.summary"></div>
        </div>
      </div>

  </div>
</template>

<script>
import Butter from 'buttercms'
import moment from 'moment'
export default {
  data () {
    return {
      butter: null,
      posts: []
    }
  },
  created () {
    this.butter = Butter('d3415f0b12675ed0d40fbc678dd7abcca2ef2f9f')
    this.getPosts()
  },
  methods: {
    getPosts () {
      this.butter.post.list({
        page: 1,
        page_size: 10
      }).then(res => {
        this.posts = res.data.data
      })
    },
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
  computed: {
    fomatDate (value) {
      return moment(value).format('MMMM Do, YYYY')
    }
  }
}
</script>
