<template>
  <!-- component for the header which saves the name of the user in local storage -->
  <header>
    <h1>
      Hello,
      <input type="text" placeholder="Enter your name here" v-model="name" />
    </h1>
    <p v-if="todoItems.length === 0">Add a few items to your to-do list</p>
    <p v-if="todoItems.length">Here is your current to-do list</p>
  </header>
</template>

<script>
export default {
  data() {
    return {
      // checks local storage for saved name
      name: localStorage.getItem('name') || '',
    }
  },
  computed: {
    todoItems() {
      return this.$store.state.todoItems
    },
  },
  watch: {
    name(val) {
      localStorage.setItem('name', val)
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin: 0;
}

input {
  border: none;
  outline: none;
  background: none;
  cursor: initial;
  font-size: 2rem;
  font-weight: inherit;
}

input::placeholder {
  font-weight: 400;
  opacity: 0.3;
}

p {
  margin: 0.5rem 0;
}
</style>
