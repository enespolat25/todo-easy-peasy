import { createStore, action, computed } from "easy-peasy";
import { nanoid } from "nanoid";
const todoModel = {
  todos: [{ id: 1, task: "1 koli yumurta al" }],
  addTodo: action((state, payload) => {
    payload.id = nanoid();
    state.todos.push(payload);
  }),
  removeTodo: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  }),
  numberOfItems: computed((state) => state.todos.length)
};
const store = {
  todoModel
};
export default createStore(store);
