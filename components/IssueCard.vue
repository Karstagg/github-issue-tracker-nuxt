<template>
  <div class="card">
    <div v-if="issue.pull_request" class="card-header card-icon-pull">
      <h1 class="card-heading">{{issue.number}}</h1>
    </div>
    <div v-else-if="issue.state === 'closed'" class="card-header card-icon-closed">
      <h1 class="card-heading">{{issue.number}}</h1>
    </div>
    <div v-else class="card-header card-no-icon">
      <h1 class="card-heading">{{issue.number}}</h1>
    </div>
    <div class="card-body">
      <div class="card-contents">
        {{issue.title}}
      </div>
    </div>
    <div class="card-footer footer-grid grid-containter">
        <div v-for="label in issue.labels" class="card-label">{{label.name}}</div>
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
  }
  .card-header {
    width: 100%;
    height: 50px;
    color: black;
    border-radius: 10px 10px 0 0;
  }
  .card-icon-pull {
    background: #C0AE4A url(../assets/icons/pull-request.svg) no-repeat scroll 95%;
    filter: invert(100%);
  }
  .card-icon-closed {
    background: #C0AE4A url(../assets/icons/issue-closed.svg) no-repeat scroll 95%;
    filter: invert(100%);
  }
  .card-no-icon {
    background-color: #C0AE4A;
    filter: invert(100%);
  }
   .card-body {
     width: 100%;
     height: 200px;
     background-color: white;
   }
   .card-contents {
     width: 90%;
     padding: 5% 5% 0 5%;
   }
   .card-footer {
     width: 100%;
     height: 50px;
     background-color: white;
     border-radius: 10px;
   }
   .card-heading {
     margin-left: 10px;
   }
   .card-label {
     width: 100%;
     height: 20px;
     font-size: 9pt;
     color: #ffffff;
     background: #E91E63;
     border-radius: 10%
   }
  .footer-grid {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }

  .grid-containter {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }
 </style>
