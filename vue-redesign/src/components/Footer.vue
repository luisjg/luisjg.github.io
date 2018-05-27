<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          &copy; luisjg {{ currentYear }}
        </p>
        <p>
          <a href="https://github.com/luisjg" class="icon" target="_blank">
            <i class="fab fa-github-square" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/luis-guzman-a6b59866" class="icon" target="_blank">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="mailto:contact@luisjg.io" class="icon" target="_blank">
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
    background-image: linear-gradient(141deg,#dfd8d9 0,#f5f5f5 71%,#fff 100%);
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
