<template>
  <div id="app">
  <div class="container">
   <div class="row">
     <div class="col-9">
       <AddMember />
       <Todos />
     </div>
     <div class="col-3">
       <Team />
     </div>
   </div>
  </div>
  </div>
</template>

<script>
import Todos from "@/components/Todos";
import Team from "@/components/Team";
import AddMember from "@/components/Add-Member";
export default {
  name: 'App',
  components: {
    AddMember,
    Team,
    Todos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  margin-top: 60px;
}
</style>
