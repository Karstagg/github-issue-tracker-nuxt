<template>
  <div>
    <Header></Header>
    <div class="toggle-grid-container">
      <div class="toggle-grid">
        <h3  v-on:click="filter = 'all'" v-bind:class="{active: filter === 'all'}" class="toggle-item">All</h3>
        <h3 v-on:click="filter = 'open'" v-bind:class="{active: filter === 'open'}" class="toggle-item">Open</h3>
        <h3 v-on:click="filter = 'closed'" v-bind:class="{active: filter === 'closed'}" class="toggle-item">Closed</h3>
        <h3 v-on:click="filter = 'pull'" v-bind:class="{active: filter === 'pull'}" class="toggle-item">Pull</h3>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid">
        <div v-for="issue in issues">
          <issue-card v-if="filter === 'all'" :issue="issue"></issue-card>
          <issue-card v-else-if="filter === 'open' && issue.state === 'open'" :issue="issue"></issue-card>
          <issue-card v-else-if="filter === 'closed'  && issue.state === 'closed'" :issue="issue"></issue-card>
          <issue-card v-else-if="filter === 'pull' && issue.pull_request" :issue="issue"></issue-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IssueCard from '../components/IssueCard'
  import Header from '../components/Header'

  export default {
    components: { IssueCard, Header },
    computed: {
      issues() {
        return this.$store.state.issues
      }
    },
    data() {
      return {
        triggered: false,
        page: 1,
        filter: "all"
      }
    },
    methods: {
      handleScroll() {
        console.log(this.page)
        if (document.documentElement.scrollTop + window.innerHeight > document.documentElement.scrollHeight - 3000) {

          if (this.triggered === false) {
            this.triggered = true
            this.search(this.issues.url)
          }
        }
      },
      addIssues(data) {
        this.$store.commit('addIssues', data)
      },
      async search(query) {
        let result = await this.$axios.$get('https://api.github.com/search/issues?q=' + query + '&per_page=50' + '&page=' + this.page)
        console.log(result.items, 'res')
        let storeIt = await this.addIssues(result.items)
        this.page++
        this.triggered = false
      }
    },
    created: function() {
      console.log(this.filter)
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }


  }

</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    grid-auto-rows: minmax(100px, auto);
    grid-row-gap: 50px;
  }

  .grid-container {
    padding-top: 100px;
    width: 90%;
    padding-right: 5%;
    padding-left: 5%;
  }
  .toggle-grid {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 10px;
  }

  .toggle-grid-container {
    width: 30%;
    margin-right: 65%;
    margin-left: 5%;
    padding-top: 100px;
  }
  .toggle-item {
    cursor: pointer;
  }
  .active {
    color: #E91E63;
  }

</style>
