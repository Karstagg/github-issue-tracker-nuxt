<template>
  <div class="container">
    <div v-for="issue in issues">
      {{issue}}
    </div>
  </div>
</template>

<script>
  export default {

    computed: {
      issues() {
        return this.$store.state.issues
      }
    },
    methods: {
      addIssues(data) {
        this.$store.commit('addIssues', data)
      },
      async search(submitEvent) {
        let query = submitEvent.srcElement[0].value
        let result = await this.$axios.$get('https://api.github.com/search/issues?q=' + query)
        let storeIt = await this.addIssues(result)
        $nuxt.$router.push(
          { name: 'issues' }
        )
      }
    },
    created: function() {

      console.log(this.issues)

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


</style>
