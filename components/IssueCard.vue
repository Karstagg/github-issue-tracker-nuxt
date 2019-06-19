<template>
  <div class="card">
    <div class="card-header">
    {{issue.number}}
    </div>
    <div class="card-body">

    </div>
    <div class="card-footer">

    </div>
  </div>
</template>
<script >
 export default {
    props : ['issue']
 }
</script>

 <style lang="scss">
  .card {
    width: 400px;
    height: 300px;
    background-color: white;
    border: solid 1px black
  }
   .card-header {
     width: 100%;
     height: 50px;
     background-color: white;
     border-bottom: solid 1px black
   }
   .card-body {
     width: 100%;
     height: 200px;
     background-color: white;
   }
   .card-footer {
     width: 100%;
     height: 50px;
     background-color: white;
     border-top: solid 1px black
   }
 </style>
