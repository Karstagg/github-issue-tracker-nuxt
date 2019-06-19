<template>
  <div class="container">
    <div>
      <h1 class="title">
        github-issue-tracker-nuxt
      </h1>
      <h2 class="subtitle">
        <search></search>
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
  import search from "../components/search"
  export default {
    name: 'App',
    components: {
      search
    }
  }

</script>

<style lang="sass">
.container
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center


.title
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px


.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px


.links
  padding-top: 15px

</style>
