import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../../types/todo';
import { v4 } from 'uuid';

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
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
