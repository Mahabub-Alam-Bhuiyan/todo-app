<template>
<div>
    <h3>Todos</h3>
  <hr>
  <div class="row">
    <div class="col-sm-12 col-md-4" v-for="todos in allTodos" :key="todos.id">
      <div class="todos">
<!--        <p><b>user name:</b> {{ todos.username }} </p>-->
        <p><b>Name:</b> {{ todos.name }} </p>
<!--        <p><b>Email:</b> {{ todos.email }} </p>-->
<!--        <p><b>Address:</b> {{ todos.address.street }} , {{ todos.address.suite }} , {{ todos.address.city }}  </p>-->
     <div class="button">
       <button class="btn btn-light btn-add" @click="deleteTodo(todos.id)" > Remove member </button>
       <button class="btn btn-light btn-add" @click="addTodo(todos.id)" :class="{'button-show':isActive}"> Add member </button>
       <button class="btn btn-light btn-added" @click="removeMember(todos.id)" :class="{'added-button-show':isAddActive}"> member added</button>
     </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  // eslint-disable-next-line
  name: "Todos",
  data(){
    return{
      isActive: false,
      isAddActive: false
    }
  },
  computed:{
    ...mapGetters(['allTodos'])
  },
  methods:{
    ...mapActions(["fetchTodos","addMember","deleteTodo"]),
    // eslint-disable-next-line no-unused-vars
    // addMember(id){
    //
    //   this.isActive = true
    //   this.isAddActive = true
    // },
    // removeMember(id){
    //   this.isActive = false
    //   this.isAddActive = false
    // }
  },
  created() {
    this.fetchTodos()
  }

}
</script>

<style scoped>
.todos{
  width: 100%;
  border: 1px solid #2c3e50;
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
}
.todos p{
  margin: 0;
}
.btn-add ,.btn-added{
  margin: 5px;
  font-weight: 700;
  transition: all ease 0.5s;
  font-size: 11px;
}
.btn-add:hover, .btn-added:hover{
  border: 1px solid white;
  background-color: #2c3e50;
}
.btn-add:focus, .btn-added:focus{
  outline: 0;
}
.btn-add{
  display: block;
}
.button-show{
  display: none;
}
.btn-added{
  display: none;
}
.added-button-show{
  display: block;
}
.button{
  display: flex;
}
</style>