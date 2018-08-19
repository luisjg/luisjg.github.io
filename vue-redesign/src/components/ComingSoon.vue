<template>
  <div id="not-found" class="container has-text-centered">
    <h2 class="title">Coming Soon!</h2>
    <p class="is-size-4-desktop">
      Hang on tight, this is not ready yet!<br>
      <a @click="$router.go(-1)">Take me back to where I came from!</a>
    </p>
  </div>
</template>

<style scoped>
 #not-found {
   padding: 3rem 1.5rem;
 }
</style>


