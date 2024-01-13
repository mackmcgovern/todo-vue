<template>
  <main>
    <the-header></the-header>
    <new-task></new-task>
    <section>
      <todo-list></todo-list>
    </section>
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TodoList from './components/TodoList.vue'
import NewTask from './components/NewTask.vue'

export default {
  components: {
    TheHeader,
    TodoList,
    NewTask,
  },
  computed: {
    todos() {
      return this.$store.state.todoItems
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: sans-serif;
  color: #333;
}

body {
  display: flex;
  justify-content: center;
  margin: 0;
}

main {
  width: 100vw;
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  margin: 5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);
}

li {
  list-style: none;
}

button {
  padding: 10px 12px;
  background-color: #5eaab4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
}

button.delete {
  background-color: #8d4b4b;
}

@media screen and (max-width: 800px) {
  main {
    margin-top: 0;
  }
}
</style>
