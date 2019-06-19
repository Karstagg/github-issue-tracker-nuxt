<template>
  <div>
    <form id="submitForm" @submit.prevent="search">
      <input type="text"  placeholder="Search">
    </form>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    computed: {
      issues () {
        return this.$store.state.issues
      }
    },
    methods: {
      addIssues (data) {
        this.$store.commit('addIssues', data)
      },
      async search (submitEvent) {
        let query = submitEvent.srcElement[0].value;
        let result = await this.$axios.$get('https://api.github.com/search/issues?q=' + query)
        let storeIt = await this.addIssues(result);
        $nuxt.$router.push(
        { name: 'issues' }
        )
      }
    }
  }
</script>

<style>
</style>
