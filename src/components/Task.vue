<template>
  <div :class="[task.done ? 'taskChecked' : 'taskUnchecked']">
    <img
      class="checkBox"
      @click="$emit('toggle-done', task.id)"
      v-bind:src="task.done ? checked : unchecked"
      :alt="task.done ? 'checked' : 'unchecked'"
    />
    <div :class="[task.done ? 'done' : '', 'task']" >
      <h3>
        {{ task.text }}
        <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
      </h3>
      <p>{{ task.day }} at {{task.time}}</p>
    </div>
  </div>
</template>

<script>

//change reminders

import unchecked from "../assets/uncheck.png";
import checked from "../assets/check.png";

export default {
  name: "Task",

  props: {
    task: Object,
  },
  data() {
    return {
      unchecked: unchecked,
      checked: checked,
    };
  },
};
</script>


<style scope>
:root {
  --bg: #f4f4f4;
}

.checkBox {
  cursor: pointer;
  height: auto;
  float: left;
  align-self: center;
  width: 25px;

  border-radius: 50%;

}
.checkBox:hover{
   background: rgba(128, 128, 128, 0.233);
}

.taskUnchecked {
  background: var(--bg);
  position: relative;
  display: grid;
  grid-template-columns: 1fr 15fr;
}

.taskChecked {
  background: #84ff80;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 15fr;
}

.fas {
  color: black;
  cursor: pointer;
}
.fas:hover {
  color: red;
  font-size: 1.5rem;
}

.task {
  margin: 5px;
  padding: 10px 20px;
}

.done{
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.taskContainer:hover {
  background: #cccccc;
}
</style>

