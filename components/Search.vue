<template>
  <div>
    <form id="submitForm" @submit.prevent="search">
      <input class="search" type="text"  placeholder="Search">
    </form>
    <h3 class="loading" v-if="loading">Loading...</h3>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        loading: false
      }
    },
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
        this.loading = true;
        let query = submitEvent.srcElement[0].value;
        let result = await this.$axios.$get('https://api.github.com/search/issues?q=' + query + '&per_page=50')
        console.log(result.items, "res")
        let storeIt = await this.addIssues(result.items);
        this.loading = false;
        $nuxt.$router.push(
        { name: 'issues' }
        )
      }
    }
  }
</script>

<style>
  .search {
    width: 30%;
    height: 40px;
  }
  .loading {
    color: #ffffff;
  }
</style>
