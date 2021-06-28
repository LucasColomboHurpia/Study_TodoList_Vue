<template>
  <span>
    <div :key="task.id" v-for="task in tasks">
      <Task :task="task" />
    </div>
  </span>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
};
</script>


