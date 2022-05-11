<template>
   <div>
     <form class="addMember" @submit.prevent="newMember()">
       <input type="text" v-model="name"  placeholder="add member name">
       <input type="email"  v-model="email" placeholder="add member email">
       <input type="submit" value="submit">
     </form>
   </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Add-Member",
  data(){
    return{
      name : "",
      email : ""
    }
  },
  methods:{
    ...mapActions(['addMember']),
    newMember(){
      this.addMember(this.name),
          this.name=''
    }
  },
}
</script>

<style scoped>
.addMember{
  width: 100%;
  margin-bottom: 30px;
}
input[type="text"]{
  width: 30% ;
  padding: 10px;
  border: 1px solid #2c3e50;
  outline: 0;
}
input[type="email"]{
  width: 30% ;
  padding: 10px;
  border: 1px solid #2c3e50;
  outline: 0;
}
input[type="number"]{
  width: 20% ;
  padding: 10px;
  border: 1px solid #2c3e50;
  outline: 0;
}
input[type="submit"] {
  width: 20%;
  padding: 10px;
  background-color: #2c3e50;
  border: 1px solid #2c3e50;
  color: white;
  cursor: pointer;
}
</style>