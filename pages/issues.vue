<template>
  <div>
    <Header></Header>
    <div class="grid-container">
      <div class="grid">
        <div v-for="issue in issues">
          <issue-card :issue="issue"></issue-card>
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
        page: 1
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

</style>
