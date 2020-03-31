<template>
  <div id="blog-home">

    <template v-if="posts === null">
      <coming-soon/>
    </template>

    <template v-else>
      <!-- Image -->
      <section class="hero ">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <figure class="image is-16by9">
                  <img :src="firstPost.featured_image" :alt="firstPost.title + ' fatured image'">
                </figure>
              </div>
            </div>

            <section class="section">
              <div class="columns">
                <div class="column is-8 is-offset-2">
                  <div class="content is-medium">
                    <h2 class="subtitle is-4">{{ this.formatDate(firstPost.published) }}</h2>
                    <h1 class="title">
                      <router-link :to="'/blog/' + firstPost.slug">
                        {{ firstPost.title }}
                      </router-link>
                    </h1>
                    <p>{{ firstPost.summary }}</p>
                  </div>
                </div>
              </div>
            </section>

            <template v-if="secondPost">
              <div class="is-divider"></div>

              <section class="section">
                <div class="columns">
                  <div class="column is-8 is-offset-2">
                    <div class="content is-medium">
                      <h2 class="subtitle is-4">{{ this.moment(secondPost.published) }}</h2>
                      <h1 class="title">
                        <router-link :to="'/blog/' + secondPost.slug">
                          {{ secondPost.title }}
                        </router-link>
                      </h1>
                      <p>{{ secondPost.summary }}</p>
                    </div>
                  </div>
                </div>
              </section>
            </template>

          </div>
        </div>
      </section>

      <div v-if="secondPost" class="is-divider"></div>

      <!-- Articles -->
      <section v-for="(post, value) in restOfPosts" :key="value" class="hero ">
        <div class="hero-body">
          <div class="container">

            <section class="section">
              <div class="columns is-variable is-8">
                <div class="column is-5" :class="[ (value % 2) === 0 ? 'is-offset-1' : ''  ]">
                  <div class="content is-medium">
                    <h2 class="subtitle is-5 has-text-grey">{{ this.formatDate(post.published) }}</h2>
                    <h1 class="title has-text-black is-3">
                      <router-link :to="'/blog/' + post.slug">
                        {{ post.title }}
                      </router-link>
                    </h1>
                    <p class="has-text-dark">
                      {{ post.summary }}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div v-if="(value % 3) === 0" class="is-divider"></div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import moment from 'moment'
  export default {
    data () {
      return {
        restOfPosts: null
      }
    },
    created () {
      if (this.butter === false) {
        this.initializeButterCms()
        this.restOfPosts = this.posts
      }
      if (this.restOfPosts != null && this.restOfPosts.length > 2) {
        this.restOfPosts.shift()
        this.restOfPosts.shift()
      }
    },
    computed: {
      ...mapGetters([
        'butter',
        'posts'
      ]),
      firstPost () {
        if (this.posts) {
          return this.posts[0]
        }
        return null
      },
      secondPost () {
        if (this.posts && this.posts[1]) {
          return this.posts[1]
        }
        return null
      }
    },
    methods: {
      ...mapActions([
        'initializeButterCms'
      ]),
      formatDate (value) {
        return moment(value).format('MMMM Do, YYYY')
      }
    },
    components: {
      'coming-soon': () => import('@/components/ComingSoon')
    }
  }
</script>
