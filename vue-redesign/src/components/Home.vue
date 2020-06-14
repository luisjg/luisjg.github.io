<template>
  <div id="home">
    <section id="home-section" class="section">
      <div class="container">
        <h1 class="title">Hello there!</h1>
      </div>
    </section>

    <div class="columns is-centered is-mobile pb-4">
      <div class="column is-two-thirds-desktop is-four-fifths-mobile">
        <p class="is-size-5 tab">
          I'm a <strong>Software Engineer</strong> from the
          <strong>Los Angeles</strong> area with <strong>{{ this.diff }} years</strong>
          of experience working as a <strong>Full Stack Web Developer</strong>
          who understands how to translate a <strong>client’s needs</strong>
          into a straightforward <strong>software design</strong> that follows
          standard <strong>code conventions</strong>,
          <strong>unit testing</strong>, and
          <strong>extensive documentation</strong>. I have a proven track
          record of <strong>designing</strong> and <strong>developing</strong>
          modern and <strong>responsive web applications</strong> and
          <strong>REST APIs</strong>. Additionally, I'm also an experienced
          <strong>team leader</strong> and <strong>mentor</strong>
          that understands software is built by a <strong>team</strong> of
          unique <strong>individuals</strong> striving to solve one
          <strong>goal</strong>.
        </p>
        <p class="is-size-5 has-text-centered pt-1-half"> If you would like to
          know more about me or are interested in collaborating,
          feel free and send me an <strong><a href="mailto:contact@luisjg.io"
            rel="noopener noreferrer" target="_blank"
            aria-label="Send me an e-mail, let's talk."><u>email</u></a></strong>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .tab {
   text-indent:5%;
  }
</style>

<script>
import moment from 'moment'
import converter from 'number-to-words'
export default {
  data () {
    return {
      now: moment(),
      then: moment('2016-02-14'),
      diff: String
    }
  },
  created () {
    this.diff = this.now.diff(this.then, 'years').toString()
    this.diff = converter.toWords(this.diff)
  }
}
</script>
