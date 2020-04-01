<template>
    <div id="blog-post">
      <template v-if="post === null">
        <coming-soon/>
      </template>

      <div v-else class="container">
        <section class="articles">
            <div class="card article">
              <div class="card-content">
                <div class="media">
                  <div class="author-image">
                    <figure class="image">
                      <img class="is-rounded" :src="authorImage" :alt="postAuthor + ' profile image'">
                    </figure>
                  </div>
                  <div class="media-content has-text-centered">
                    <p class="title article-title">{{ postTitle }}</p>
                    <div class="tags has-addons level-item">
                      <div class="tag is-rounded">{{ postCreatedAt }}</div>
                    </div>
                  </div>
                </div>
                <template v-if="postBody">
                  <div class="content article-body" v-html="postBody">
                  </div>
                </template>
              </div>
          </div>
          <div v-if="checkPosts" class="columns">
            <div class="column is-offset-2">
              <router-link
                :to="/blog/ + previousPost"
                class="button"
              >
                <i style="margin-right: 0.5rem;" class="far fa-chevron-left"></i>Previous
              </router-link>
            </div>
            <div class="column">
            </div>
            <div class="column">
              <router-link
                :to="/blog/ + nextPost"
                class="button"
              >
                Next <i style="margin-left: 0.5rem;" class="far fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
<!--          <div class="pb-4"></div>-->
        </section>
      </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 769px) {
  .articles {
    margin: 2rem 0;
    margin-top: -0.5rem;
  }
  .article-body {
    line-height: 1.4;
    margin: 0 6rem;
  }
  .title {
    margin: 0 4rem;
  }
  .tag {
    margin-top: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .articles {
    margin: 5rem 0;
    margin-top: -0.75rem;
  }
  .article-body {
    line-height: 1.4;
    margin: 0 3rem;
  }
  .title {
    margin: 0 3rem;
  }
  .tag {
    margin-top: 1rem;
  }
  .media-content {
    overflow-x: unset;
  }
}

@media screen and (max-width: 591px) {
  .article-body {
    line-height: 1.4;
    margin: 0 1rem;
  }
  .title {
    margin: 0 1rem;
  }
}
.card {
  background-color: #fff;
  color: #4a4a4a;
  box-shadow: none;
  max-width: 100%;
  position: relative;
}

.articles .content p {
  line-height: 1.9;
  margin: 5rem 0;
}

.author-image {
  display: block;
  margin-bottom: 1rem;
  position: absolute;
  top: -30px;
  left: 50%;
  width: 60px;
  height: 60px;
  margin-left: -30px;
  border: 3px solid #ccc;
  border-radius: 50%;
}

.author-image i.fas {
  display: inline-block;
  padding: 0.3em 0.2em;
}

.media-content {
  margin-top: 2rem;
}

.article {
  margin-top: 6rem;
}

.article-title {
  font-size: 2rem;
  font-style: italic;
  line-height: 1.25;
}
</style>

<script>
  import moment from 'moment'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'blog-post',
    watch: {
      $route (to, from) {
        this.retrieveBlogPost(this.$route.params.slug)
      }
    },
    methods: {
      ...mapActions([
        'initializeButterCms',
        'retrieveBlogPost'
      ])
    },
    computed: {
      postCreatedAt () {
        return moment(this.post.data.published).format('MMM Do YYYY')
      },
      postBody () {
        if (this.post && this.post.data.body) {
          return this.post.data.body
        }
      },
      postTitle () {
        if (this.post && this.post.data.title) {
          return this.post.data.title
        }
      },
      authorImage () {
        if (this.post && this.post.data.author.profile_image) {
          return this.post.data.author.profile_image
        }
      },
      postAuthor () {
        if (this.post && this.post.data.author.first_name) {
          return this.post.data.author.first_name
        }
      },
      nextPost () {
        if (this.post != null && this.post.meta.next_post != null) {
          return this.post.meta.next_post
        } else {
          return null
        }
      },
      previousPost () {
        if (this.post != null && this.post.meta.previous_post != null) {
          return this.post.meta.previous_post
        } else {
          return null
        }
      },
      checkPosts () {
        if (this.nextPost === null && this.previousPost === null) {
          return null
        } else {
          return true
        }
      },
      ...mapGetters([
        'butter',
        'post'
      ])
    },
    components: {
      'coming-soon': () => import('@/components/ComingSoon')
    },
    created () {
      if (this.butter === false) {
        this.initializeButterCms()
      }
      this.retrieveBlogPost(this.$route.params.slug)
    }
  }
</script>
