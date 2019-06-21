<template>
  <div class="header">
    <div class="grid-containter">
      <div class="grid">
        <h3>All</h3>
        <h3>Open</h3>
        <h3>Closed</h3>
        <h3>Pull</h3>
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
  .toggle-bar {
    width: 100vw;
    height: 70px;
    background: #ffffff;
    color: black;
    position: fixed;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .grid {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 10px;
  }

  .grid-containter {
    width: 40%;
    margin-right: 55%;
    margin-left: 5%;
  }

</style>
