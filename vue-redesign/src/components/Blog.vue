<template>
  <div id="blog">
    <div class="container">
      <!-- START ARTICLE FEED -->
      <section class="articles">
          <div class="column is-8 is-offset-2">
              <!-- START ARTICLE -->
              <div v-for="(post,index) in posts" :key="post.slug + '_' + index" class="card article">
                  <div class="card-content">
                      <div class="media">
                        <div class="author-image">
                          <figure class="image">
                            <img class="is-rounded" src="https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432443/luisjg/profile.jpg" alt="">
                          </figure>
                        </div>
                          <div class="media-content has-text-centered">
                              <router-link :to="'/blog/' + post.slug">
                                <p class="title article-title">{{ post.title }}</p>
                              </router-link>
                              <div class="tags has-addons level-item">
                                  <span class="tag is-rounded">@{{ post.author.slug }}</span>
                                  <span class="tag is-rounded">{{ formatDate(post.created) }}</span>
                              </div>
                          </div>
                      </div>
                      <div class="content article-body">
                          <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                          <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam.
                              Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                          <h3 class="has-text-centered is-italic">How to properly center tags in bulma?</h3>
                          <p> Proper centering of tags in bulma is done with class: <pre>level-item</pre>
                              Voluptat ut farmacium tellus in metus vulputate. Feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie.
                              Accumsan lacus vel facilisis volutpat est velit egestas. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum.</p>
                      </div>
                  </div>
              </div>
              <!-- END ARTICLE -->
              <!-- START ARTICLE -->
              <div class="card article">
                  <div class="card-content">
                      <div class="media">
                          <div class="author-image">
                            <i class="fas fa-code fa-2x"></i>
                          </div>
                          <div class="media-content has-text-centered">
                              <p class="title article-title">Sapien eget mi proin sed 🔱</p>
                              <p class="subtitle is-6 article-subtitle">
                                  <a href="#">@daria</a> on February 17, 2018
                              </p>
                          </div>
                      </div>
                      <div class="content article-body">
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Sapien eget mi proin sed. Sit amet mattis vulputate enim.
                          </p>
                          <p>
                              Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non. Proin fermentum leo vel orci porta non pulvinar. Imperdiet proin fermentum leo vel. Tortor posuere ac ut consequat semper viverra. Vestibulum lectus mauris ultrices eros.
                          </p>
                          <h3 class="has-text-centered is-italic">Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Cras tincidunt lobortis feugiat vivamus.</h3>
                          <p>
                              In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius morbi enim nunc. Vitae suscipit tellus mauris a diam.
                              Arcu non sodales neque sodales ut etiam sit amet.
                          </p>
                      </div>
                  </div>
              </div>
              <!-- END ARTICLE -->
              <!-- START ARTICLE -->
              <div class="card article">
                  <div class="card-content">
                      <div class="media">
                          <div class="author-image">
                            <i class="fas fa-people-carry fa-2x"></i>
                          </div>
                          <div class="media-content has-text-centered">
                              <p class="title article-title">Cras tincidunt lobortis feugiat vivamus.</p>
                              <p class="subtitle is-6 article-subtitle">
                                  <a href="#">@angela</a> on October 7, 2017
                              </p>
                          </div>
                      </div>
                      <div class="content article-body">
                          <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Sapien eget mi proin sed. Sit amet mattis vulputate enim.
                          </p>
                          <p>
                              Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non. Proin fermentum leo vel orci porta non pulvinar. Imperdiet proin fermentum leo vel. Tortor posuere ac ut consequat semper viverra. Vestibulum lectus mauris ultrices eros.
                          </p>
                          <h3 class="has-text-centered is-italic">“Everyone should be able to do one card trick, tell two jokes, and recite three poems, in case they are ever trapped in an elevator.”</h3>
                          <p>
                              In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius morbi enim nunc. Vitae suscipit tellus mauris a diam.
                              Arcu non sodales neque sodales ut etiam sit amet.
                          </p>
                      </div>
                  </div>
              </div>
              <!-- END ARTICLE -->
            </div>
      </section>
      <!-- END ARTICLE FEED -->
    </div>
  </div>
</template>

<style scoped>

@media screen and (min-width: 769px) {
  .articles {
    margin: 5rem 0;
    margin-top: -150px;
  }
  .article-body {
    line-height: 1.4;
    margin: 0 6rem;
  }
}

@media screen and (max-width: 768px) {
  .articles {
    margin: 5rem 0;
    margin-top: -110px;
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
  margin: 15px 0;
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
    // }
  },
  computed: {
    formatDate(value) {
      return momen(value).format('MMMM Do, YYYY')
    }
  }
}
</script>


