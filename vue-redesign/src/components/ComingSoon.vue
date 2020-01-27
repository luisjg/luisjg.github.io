<template>
  <div id="coming-soon">
    <section id="comming-soon-section" class="section">
      <div class="container">
        <h1 class="title">
          Coming Soon!
        </h1>
      </div>
    </section>

    <div class="container has-text-centered pb-4">
      <p class="is-size-5">
        Hang on tight, this is not ready yet!<br>
        <a @click="$router.go(-1)">Take me back to where I came from!</a>
      </p>
    </div>
  </div>
</template>
