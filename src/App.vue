<template>
  <div class="container">
    <Header title="Task Tracker" />
    <Tasks :tasks="tasks" />
  </div>
</template>



<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
  },

  data() {
    return {
      tasks: [],
    };

  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "taks1",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "taks2",
        day: "March sft at 2:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "taks3",
        day: "March 1st at 2:30pm",
        reminder: false,
      },
    ];
  },
};
</script>

<style scoped>
@import url('./components/StyleSheets/Style.css');
</style>
