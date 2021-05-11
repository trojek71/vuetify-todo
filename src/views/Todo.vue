<template>
  <div class="home">
    <field-and-task />
    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else />
  </div>
</template>

<script>
import ListTasks from "../components/Todo/ListTasks.vue";
import NoTask from "../components/Todo/NoTask.vue";
export default {
  name: "Home",

  components: {
    "field-and-task": require("@/components/Todo/FieldAndTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
    "no-tasks": require("@/components/Todo/NoTask.vue").default,
  },
};
</script>
<style >
</style>