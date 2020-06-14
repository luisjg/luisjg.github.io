<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <div class="has-text-centered">
          <div>
            <p>
              &copy; luisjg {{ currentYear }}
            </p>
          </div>
          <div class="has-text-centered contact-icons-container">
          <p class="contact-icons">
            <a href="https://github.com/luisjg" rel="noopener noreferrer" class="icon" target="_blank" aria-label="View my GitHub profile">
                <i class="fab fa-github-square fa-fw fa-2x" aria-hidden="true"></i>
              </a>
            <a href="https://www.linkedin.com/in/luis-guzman-a6b59866" rel="noopener noreferrer" class="icon" target="_blank" aria-label="Visit my LinkedIn profile">
              <i class="fab fa-linkedin fa-fw fa-2x" aria-hidden="true"></i>
            </a>
            <a href="mailto:contact@luisjg.io" rel="noopener noreferrer" class="icon" target="_blank" aria-label="Send me an e-mail to get in touch">
              <i class="fas fa-envelope-square fa-fw fa-2x" aria-hidden="true"></i>
            </a>
          </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    margin-top: 3rem;
    padding: 3rem 0 3rem 0;
    background-color: #f7f8fa;
  }
  .contact-icons-container {
    padding-top: .5rem;
    letter-spacing: .5rem;
  }
  .contact-icons {
    padding-left: .7rem;
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
