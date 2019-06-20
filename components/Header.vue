<template>
  <div class="header">
    <div class="grid-containter">
      <div class="grid">
        <h1>Github Issue Tracker</h1>
        <p class="link">placeholder</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['header']
  }
</script>

<style lang="scss">
  .header {
    width: 100vw;
    height: 70px;
    background: #E91E63;
    color: #ffffff;
    position: fixed;
  }

  .grid {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
  }

  .grid-containter {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }

  .link {
    text-align: right
  }


</style>
