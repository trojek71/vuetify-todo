import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
        {
          id: 1,
          title: "Wstawaj",
          done: false,
          dueDate:'2021-05-23'
        },
        {
          id: 2,
          title: "zrób śniadanie",
          done: false,
          dueDate:'2021-05-28'
        },
        {
          id: 3,
          title: "jedź do pracy",
          done: false,
          dueDate:null
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
        title: newTaskTitle,
        done: false,
        dueDate: null
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
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate
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
    },
    updateTaskTitle({commit}, payload) {
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Zadanie zmienione')
    },
    updateTaskDueDate({commit}, payload) {
      commit('updateTaskDueDate', payload)
      commit('showSnackbar', 'Termin zmieniony')
    }
  },
  modules: {
  }
})
