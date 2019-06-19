<template>
  <div class="grid" >
    <div v-for="issue in issues">
      <issue-card :issue ="issue"></issue-card>
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
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }

</style>
