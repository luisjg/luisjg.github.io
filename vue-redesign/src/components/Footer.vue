<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <p class="has-text-centered">
          &copy; luisjg {{ currentYear }}
        </p>
        <p class="has-text-centered">
          <a href="https://github.com/luisjg" rel="noreferrer" class="icon" target="_blank" aria-label="View my GitHub profile">
              <i class="fab fa-github-square fa-fw fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          <a href="https://www.linkedin.com/in/luis-guzman-a6b59866" rel="noreferrer" class="icon" target="_blank" aria-label="Visit my LinkedIn profile">
            <i class="fab fa-linkedin fa-fw fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;
          </a>
          <a href="mailto:contact@luisjg.io" rel="noreferrer" class="icon" target="_blank" aria-label="Send me an e-mail to get in touch">
            <i class="fas fa-envelope-square fa-fw fa-2x" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    margin-top: 3rem;
    padding: 3rem 0 3rem 0;
    background-color: #f6f8fa;
  }
</style>

<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        currentYear: ''
      }
    },
    created () {
      this.currentYear = moment().format('YYYY')
    }
  }
</script>
