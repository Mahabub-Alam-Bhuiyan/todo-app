import axios from "axios";

const state ={
     todos : [
     ],
    members:[
        {
            id : 1,
            name : "Leanne Graham",
            email: "Sincere@april.biz"
        },
        {
            id : 2,
            name : "Ervin Howell",
            email: "Sincere@april.biz"
        },
        {
            id : 3,
            name : "Clementine Bauch",
            email: "Sincere@april.biz"
        },
    ]
}
const getters = {
    allTodos: state => state.todos,
    allMembers: state => state.members
}
const actions = {
    async fetchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit("setData", response.data)
    },
    async addTodo({commit},id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/{id}`)
        commit ( 'teamData', response.data , id )
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/users/{id}`)
        commit('removeTodo',id)
    },
    async addMember({commit}, name ){
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/users',
            { name}
        );
        commit('newTodo',response.data)
    },
    // async addMember({commit}, name){
    //     const response = await axios.post('https://jsonplaceholder.typicode.com/users',{name})
    //     commit("newMember", response.data)
    // }
}
const mutations = {
    setData:(state, data) =>(state.todos = data),
    teamData: ( state , id ) =>
        (state.todos = state.todos.filter(todo => todo.id != id)),
    removeTodo:(state , id) =>
        (state.todos = state.todos.filter(todo => todo.id != id)),
    newTodo: (state,todo) => state.todos.unshift(todo),
}
export default {
    state,
    getters,
    actions,
    mutations
}