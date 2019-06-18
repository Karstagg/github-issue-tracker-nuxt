<template>
  <div>
    <form id="submitForm" @submit.prevent="search">
      <input type="text"  placeholder="Search">
    </form>
  </div>
</template>

<script>
  import axios from '../.nuxt/axios'

  export default {
    methods: {
      async search (submitEvent) {
        let query = submitEvent.srcElement[0].value;
        let result = await this.$axios.$get('https://api.github.com/search/issues?q=' + query)
        console.log(result)

      }
    }
  }
</script>

<style>
</style>
