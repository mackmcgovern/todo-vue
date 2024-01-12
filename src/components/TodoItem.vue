<template>
  <!-- component for each individual todo item -->
  <li :class="completed ? 'completed' : ''">
    <p>{{ item }}</p>
    <div>
      <button @click="toggleCompleted">
        Mark as {{ completed ? 'incomplete' : 'completed' }}
      </button>
      <button class="delete" @click="deleteTask">Delete Task</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['item', 'id', 'completed'],
  methods: {
    toggleCompleted() {
      this.$store.commit('markCompleted', this.id)
    },
    deleteTask() {
      this.$store.commit('deleteTodo', this.id)
    },
  },
}
</script>

<style scoped>
p {
  margin: 0;
  margin-right: auto;
  font-size: 1.2rem;
}

li {
  list-style: none;
  min-width: 100%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  padding: 0.8rem 0.5rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
}

.completed p {
  opacity: 0.3;
  text-decoration: line-through;
}

@media screen and (max-width: 700px) {
  li {
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    margin-bottom: 1rem;
    padding: 5px;
  }

  div {
    align-self: flex-end;
  }
}
</style>
