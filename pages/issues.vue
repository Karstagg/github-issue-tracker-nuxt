<template>
  <div >
    <div v-for="issue in issues">
      <issue-card></issue-card>
    </div>
  </div>
</template>

<script>
  import IssueCard from "../components/IssueCard"
  export default {
    components: { IssueCard },
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
    },
    created: function(){

      console.log(this.issues)

    }

  }

</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

</style>
