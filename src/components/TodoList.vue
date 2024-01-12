<template>
  <!-- component to hold the to do list -->
  <ul>
    <todo-item
      v-for="todoItem of todoItems"
      :key="todoItem.id"
      :id="todoItem.id"
      :item="todoItem.item"
      :completed="todoItem.completed">
    </todo-item>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem,
  },
  computed: {
    todoItems() {
      return this.$store.state.todoItems
    },
  },
}
</script>

<style>
ul {
  padding: 0;
}
</style>
