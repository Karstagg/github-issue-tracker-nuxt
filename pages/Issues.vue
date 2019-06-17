<template>
  <div>

      <div v-for="issue in issues" :key="issue.id">
        <div v-for="item in issue" :key="item.id">
          <h3>{{item.url}}</h3>
        </div>
      </div>

  </div>
</template>

<script>
  export default {
    async asyncData({ app }) {
      const issues = await app.$axios.$get('https://api.github.com/search/issues?q=https://github.com/gatsbyjs/gatsby/');
      console.log(await issues);
      return { issues };
    }
  }
</script>
