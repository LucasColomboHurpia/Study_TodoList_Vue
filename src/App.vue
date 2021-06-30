<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      :showAddTask="showAddTask"
      title="Task Tracker"
    />

    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>

    <Tasks @toggle-done="toggleDone" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>



<script>
import Header from "./components/Header.vue";
import Tasks from "./components/TasksGroup.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },

  data() {
    return {
      tasks: [],
      showAddTask: true,
    };
  },

  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },

    addTask(task) {
      this.tasks = [...this.tasks, task];
      this.updateStorage();
    },

    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
      this.updateStorage();
    },

    toggleDone(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );
      this.updateStorage();
    },

    updateStorage() {
      localStorage.setItem("Tasks", JSON.stringify(this.tasks));
    },

    storageTasks() {
      if (localStorage.getItem("Tasks") === null) {
        localStorage.setItem("Tasks", JSON.stringify(this.tasks));
      } else {
        let taskStorage = JSON.parse(localStorage.getItem("Tasks"));
        this.tasks = taskStorage;
        this.updateStorage();
      }
    },
  },

  created() {
    this.storageTasks();
  },
};
</script>

<style scoped>
@import url("./components/StyleSheets/Style.css");
</style>
