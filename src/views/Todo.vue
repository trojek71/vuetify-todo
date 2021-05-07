<template>
  <div class="home">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask()"
      @keyup.enter="addTask()"
      class="pa-3"
      outlined
      label="Dodaj zadanie"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>
    <v-list v-if="tasks.length" class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.zadanie }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="no-tasks">
      <v-icon class="pa-6" size="100" color="primary">mdi-check</v-icon>
      <div class="pa-7 text-h5 primary--text">Brak Zadań</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newTaskTitle: "",
      tasks: [
        {
          id: 1,
          zadanie: "Wstawaj",
          done: false,
        },
        {
          id: 2,
          zadanie: "zrób śnadanie",
          done: false,
        },
        {
          id: 3,
          zadanie: "jedź do pracy",
          done: false,
        },
      ],
    };
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        zadanie: this.newTaskTitle,
        done: false,
      };
      this.tasks.push(newTask);
      this.newTaskTitle = "";
    },
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>
<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 50%
</style>