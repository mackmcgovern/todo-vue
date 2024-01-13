<template>
  <!-- component for adding a task -->
  <section>
    <input
      type="text"
      placeholder="Add new task"
      v-model="userInput"
      @keydown.enter="addTask" />
    <button @click="addTask">Add Task</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
    }
  },
  methods: {
    addTask() {
      // validating input
      if (this.userInput.trim() === '') {
        return
      }
      const todo = {
        // creating a unique id for each item
        id: Date.now().toString(36),
        item: this.userInput,
        completed: false,
      }
      this.$store.commit('addTodo', todo)
      // resetting the input after adding todo item
      this.userInput = ''
    },
  },
}
</script>

<style scoped>
input {
  border: none;
  border-bottom: #33333374 solid 1px;
  outline: none;
  background: none;
  cursor: initial;
  font-size: 1.4rem;
  font-weight: inherit;
  width: 85%;
}

input::placeholder {
  color: #4f4f9e;
}

section {
  margin: 1rem 0 2rem 0;
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #4f4f9e;
}

@media screen and (max-width: 800px) {
  section {
    flex-direction: column;
    margin: 1rem 0;
  }

  button {
    margin-top: 15px;
  }

  input {
    width: 100%;
  }
}
</style>
