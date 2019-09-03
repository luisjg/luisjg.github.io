<template>
  <div id="coming-soon">
    <section id="comming-soon-section" class="section">
      <div class="container">
        <h2 class="title">
          Coming Soon!
        </h2>
      </div>
    </section>

    <div class="container has-text-centered pb">
      <p class="is-size-4-desktop">
        Hang on tight, this is not ready yet!<br>
        <a @click="$router.go(-1)">Take me back to where I came from!</a>
      </p>
    </div>
  </div>
</template>
