<template>
  <span>
    <div :key="task.id" v-for="task in tasks">
      <Task
      @toggle-done="$emit('toggle-done', task.id)"
      @delete-task="$emit('delete-task', task.id)" 
      :task="task" />
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

  emits: ['delete-task', 'toggle-done']
};
</script>


