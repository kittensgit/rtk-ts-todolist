import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { ITodo } from '../../types/todo';

interface TodoState {
    todos: ITodo[];
}

const initialState: TodoState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo['task']>) => {
            const newTodo: ITodo = {
                id: v4(),
                task: action.payload,
                complete: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action: PayloadAction<ITodo['id']>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        toggleTodo: (state, action: PayloadAction<ITodo['complete']>) => {
            state.todos = state.todos.map((todo) =>
                todo.complete === action.payload
                    ? { ...todo, complete: !todo.complete }
                    : todo
            );
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
