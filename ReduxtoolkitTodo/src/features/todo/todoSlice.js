import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, text: "Hello world" }
    ]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // Correct: Creating a new array using filter
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
        const todo = state.todos.filter((todo)=>todo.id===action.payload.id)
        todo.text = action.payload.text
    }
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

