<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day and Time</label>

      <div class="appointment">
          <input type="date" id="date" name="date"
          v-model="day"
          placeholder="Add Day and Time"  
          required      
          />
          <input type="time" id="appt" name="appt"
          v-model="time"
          min="00:00" max="23:59" required>
      </div>
    </div>
    <input type="submit" value="Add Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",

  data() {
    return {
      text: "",
      day: "",
      time: "",
      done: false, //change 
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 1000000),
        text: this.text,
        time: this.time,
        day: this.day, 
        done: this.done //change 
      };
      ; console.log(newTask)
      this.$emit('add-task', newTask);

      this.text = "";
      this.day = "";
      this.time = "";
      this.done = false; //change 
    },
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}

.appointment{
  display: flex;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>