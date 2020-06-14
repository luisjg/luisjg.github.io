<template>
  <div id="app">
    <header>
      <nav-bar/>
    </header>
    <main>
      <transition name="fade">
        <router-view />
      </transition>
      <div class="has-text-centered">
        <div>
          <sup>Built with</sup>
        </div>
        <div class="pt-1-half" style="letter-spacing: .2rem;">
          <a href="https://vuejs.org" rel="noopener noreferrer" target="_blank" aria-label="Visit the Vue homepage to find out more">
            <svg arialabelledby="vue-logo" viewBox="0 0 128 128" role="img">
              <title id="vue-logo">Vue JS Logo</title>
              <path d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087" fill="none"></path>
              <path d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z" fill="#35495e"></path>
              <path d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z" fill="#41b883"></path>
            </svg>
          </a>
          <a href="https://github.com" rel="noopener noreferrer" target="_blank" aria-label="Visit the GitHub homepage to find out more">
            <svg arialabelledby="github-logo" viewBox="0 0 128 128" role="img">
              <title id="github-logo">GitHub Logo</title>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
              <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
            </svg>
          </a>
        </div>
        <div class="pt-1-half">
          <a href="https://bulma.io" rel="noopener noreferrer" target="_blank" aria-label="Visit the Bulma homepage to find out more">
            <img src="https://res.cloudinary.com/dfhliq7vp/image/upload/v1547432623/luisjg/made-with-bulma.e0eab74.png" alt="Made with Bulma" width="128" height="24">
          </a>
          <a href="https://buttercms.com" rel="noopener noreferrer" target="_blank" aria-label="Visit the ButterCMS homepage to find out more">
            <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="Blog powered by ButterCMS" width="128"/>
          </a>
        </div>
      </div>
    </main>
    <footer-content />
  </div>
</template>

<style>
  a {
    /* color: #9164bc; */
    color: #766C7F;
  }
  a:hover, a:focus {
    /* color: #766C7F; */
    color: #9164bc;
  }
  .russian-green {
    color: #6d9f71;
  }
  .red-text {
    color: #d00d2d;
  }
  .mummys-tomb {
    color: #808D8E;
  }
  .deep-lilac {
    color: #9b64bc;
  }
  .lue-bell {
    color: #A3A5C3;
  }
  .old-lavender {
    color: #766C7F;
  }
  .pastel-blue {
    color: #A9D2D5;
  }
  ::selection {
    color: white;
    background: #766C7F; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    color: white;
    background: #766C7F; /* Gecko Browsers */
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .pb-3 {
    padding-bottom: 3rem;
  }
  .pb-4 {
    padding-bottom: 4rem;
  }
  .pt-1-half {
    padding-top: 1.5rem;
  }
  /* width */
  ::-webkit-scrollbar {
    width: .5rem;
    max-height: .5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #766C7F; /* WebKit/Blink Browsers */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
  .columns {
    margin: 0;
  }
  a svg {
    width: 10%;
  }
  @media screen and (min-width: 768px) {
    a svg {
      width: 3%;
    }
    .columns {
      margin-left: -0.75rem;
      margin-right: -0.75rem;
      margin-top: -0.75rem;
    }
  }
</style>

<script>
  import { mapActions } from 'vuex'
  export default {
    created () {
      // register service worker
      // this.registerServiceWorker()
      // execute the json calls
      this.initializeButterCms()
      this.retrieveBlogPosts()
      this.retrieveExperienceData()
      this.retrieveSchoolData()
      this.retrieveWorkData()
    },
    components: {
      'footer-content': () => import('@/components/Footer'),
      'nav-bar': () => import('@/components/NavBar')
    },
    methods: {
      ...mapActions([
        'initializeButterCms',
        'retrieveBlogPosts',
        'retrieveExperienceData',
        'retrieveSchoolData',
        'retrieveWorkData'
      ]),
      registerServiceWorker: function () {
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
              console.log('SW registered: ', registration)
            }).catch(registrationError => {
              console.log('SW registration failed: ', registrationError)
            })
          })
        }
      }
    }
  }
</script>
