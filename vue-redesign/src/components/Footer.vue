<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          &copy; luisjg {{ currentYear }}
        </p>
        <p>
          <a href="https://github.com/luisjg" rel="noreferrer" class="icon" target="_blank" aria-label="View my GitHub profile">
            <i class="fab fa-github-square" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/luis-guzman-a6b59866" rel="noreferrer" class="icon" target="_blank" aria-label="Visit my LinkedIn profile">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:contact@luisjg.io" rel="noreferrer" class="icon" target="_blank" aria-label="Send me an e-mail to get in touch">
            <i class="fas fa-envelope-square" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    margin-top: 50px;
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
