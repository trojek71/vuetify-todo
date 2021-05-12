import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
        {
          id: 1,
          zadanie: "Wstawaj",
          done: false,
        },
        {
          id: 2,
          zadanie: "zrób śniadanie",
          done: false,
        },
        {
          id: 3,
          zadanie: "jedź do pracy",
          done: false,
          
        },
      ],
      snackbar :{
        show: false,
        text: ''
      }
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        zadanie: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
   
    },
    doneTask(state,id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
     deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state, text) {
      let timeout = 0
      if(state.snackbar.show){
      state.snackbar.show = false
      timeout = 300
      }
      setTimeout(() => {
      state.snackbar.show = true
      state.snackbar.text = text
      }, timeout)
    },
    hideSnackbar(state){
      state.snackbar.show = false
    }
  },
  actions: {
    addTask({commit}, newTaskTitle){
      commit('addTask' , newTaskTitle)
      commit('showSnackbar', 'Zadanie dodane')
    },
    deleteTask({commit}, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Zadanie usuniete')
    }
  },
  modules: {
  }
})
