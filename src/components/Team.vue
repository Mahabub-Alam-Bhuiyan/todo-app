<template>
<div>
  <h3>My Team</h3>
  <hr>
  <div class="team" v-for="member in allMembers" :key="member.id">
    <span class="cross"> &#10060; </span>
    <p><b>Name :</b> {{ member.name }} </p>
    <p><b>email :</b> {{ member.email }} </p>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  // eslint-disable-next-line
  name: "Team",
  // methods:{
  //   ...mapActions(["addTodo"]),
  // },
  computed:{
    ...mapGetters(['allMembers'])
  },
  methods:{
    ...mapActions(["addTodo"])
  }

}
</script>

<style scoped>
.team{
  position: relative;
  padding: 10px 10px 10px 20px;
  border: 1px solid gray;
  margin: 5px 0;
  border-radius: 5px;
}
.team p{
  margin: 0;
}
.cross{
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  cursor: pointer;
}
</style>