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
        text: 'Hellow'
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
    showSnackbar(state) {
      state.snackbar.show = true
    }
  },
  actions: {
    addTask({commit}, newTaskTitle){
      commit('addTask' , newTaskTitle)
      commit('showSnackbar')
    },
    deleteTask({commit}, id) {
      commit('deleteTask', id)
      commit('showSnackbar')
    }
  },
  modules: {
  }
})
