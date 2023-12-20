import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
                id: '1',
                task: action.payload,
                complete: false,
            };
            state.todos.push(newTodo);
        },
    },
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
