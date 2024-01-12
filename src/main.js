// import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

// checking if there are tasks set in local storage
const getStoredItems = function () {
  let items = []
  if (localStorage.getItem('todos')) {
    const storedItems = localStorage.getItem('todos')
    items = JSON.parse(storedItems)
  }
  return items
}

const storedItems = getStoredItems()

// function to persist todo tasks in local storage
const storeItems = function (items) {
  localStorage.setItem('todos', JSON.stringify(items))
}

const store = createStore({
  state() {
    return {
      todoItems: storedItems,
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todoItems.unshift(payload)
      storeItems(state.todoItems)
    },
    deleteTodo(state, id) {
      const items = state.todoItems.filter(todo => todo.id !== id)
      state.todoItems = items
      storeItems(state.todoItems)
    },
    markCompleted(state, id) {
      const item = state.todoItems.find(todo => todo.id === id)
      item.completed = !item.completed
      storeItems(state.todoItems)
    },
  },
})

const app = createApp(App)

app.use(store)

app.mount('#app')
