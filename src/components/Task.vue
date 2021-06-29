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
       <span :class='task.done ? "taskTextdone":""'>{{ task.text }}</span> 
        <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
      </h3>
      <p :class='task.done ? "taskTextdone":""'>{{ task.day }} at {{task.time}}</p>
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
  background-color: white;
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
.taskChecked:hover,.taskUnchecked:hover{
  transform: scale(1.05);
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   z-index: 2;
/*   border: 1px solid black ;
 */  }

.fas {
  color: black;
  cursor: pointer;
}
.fas:hover {
  color: red;
   transform: scale(1.5);
}

.task {
  margin: 5px;
  padding: 10px 20px;
}
.taskTextdone{
  text-decoration:line-through;
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

