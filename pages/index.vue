<template>
  <div class="container">
    <div>
      <h1 class="title">
        github-issue-tracker-nuxt
      </h1>
      <h2 class="subtitle">
        <search></search>
      </h2>
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

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #E91E63;;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #ffffff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
