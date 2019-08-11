<template>
    <div id="blog-post">
      <div v-if="post !== null" class="container">
        <section class="articles">
          <div class="column is-8 is-offset-2">
            <div class="card article">
              <div class="card-content">
                <div class="media">
                  <div class="author-image">
                    <figure class="image">
                      <img class="is-rounded" :src="this.post.data.author.profile_image" alt="">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title article-title has-text-centered">{{ this.post.data.title }}</p>
                    <!-- <div class="tags has-addons level-item">
                      <span class="tag is-rounded">@{{ this.post.data.author.slug }}</span>
                    </div> -->
                    <div class="content article-body" v-html="this.post.data.body"></div>

                    <router-link
                      v-if="this.post.meta.previous_post"
                      :to="/blog/ + this.post.meta.previous_post.slug"
                      class="button"
                    >
                      {{ this.post.meta.previous_post.title }}
                    </router-link>
                    <router-link
                      v-if="this.post.meta.next_post"
                      :to="/blog/ + this.post.meta.next_post.slug"
                      class="button"
                    >
                      {{ this.post.meta.next_post.title }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
}

@media screen and (max-width: 591px) {
  .article-body {
    line-height: 1.4;
    margin: 0 1rem;
  }
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

.media-center {
  display: block;
  margin-bottom: 1rem;
}

.media-content {
  margin-top: 3rem;
}

.article {
  margin-top: 6rem;
}

div.column.is-8:first-child {
  padding-top: 0;
  margin-top: 0;
}

.article-title {
  font-size: 2rem;
  font-weight: bold;
  line-height: 2;
}

.article-subtitle {
  color: #909AA0;
  margin-bottom: 3rem;
}

</style>

<script>
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
        'retrieveBlogPost'
      ])
    },
    computed: {
      ...mapGetters([
        'post'
      ])
    },
    created () {
      this.retrieveBlogPost(this.$route.params.slug)
    }
  }
</script>
