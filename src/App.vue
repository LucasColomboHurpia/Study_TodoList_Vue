<template>
  <div class="container">
    <Header 
    @toggle-add-task="toggleAddTask"
    :showAddTask="showAddTask"
    title="Task Tracker" />

    <div v-show="showAddTask">
      <AddTask 
      @add-task="addTask"/>
    </div>

    <Tasks 
    @toggle-done="toggleDone" 
    @delete-task="deleteTask" 
    :tasks="tasks" />

  </div>
</template>



<script>
import Header from "./components/Header.vue";
import Tasks from "./components/TasksGroup.vue";
import AddTask from "./components/AddTask.vue"

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
      showAddTask: false,
    };
  },

  methods: {
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },

    addTask(task){
      this.tasks = [...this.tasks, task]
    },

    deleteTask(id) {
      if (confirm("Are you sure?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },

    toggleDone(id){ //change here and in TEMPLATE
      this.tasks = this.tasks.map((task)=> 
        task.id === id?
        {...task, done: !task.done}
        :task
      )
    },
  },

  created() {
    this.tasks = [
      {
        id: 1,
        text: "taks1",
        day: "March 1st at 2:30pm",
        time: "2pm",
        done: true,
      },
      {
        id: 2,
        text: "taks2",
        day: "March sft at 2:30pm",
        time: "2pm",
        done: true,
      },
      {
        id: 3,
        text: "taks3",
        day: "March 1st at 2:30pm",
        time: "2pm",
        done: false,
      },
    ];
  },
};
</script>

<style scoped>
@import url("./components/StyleSheets/Style.css");
</style>
