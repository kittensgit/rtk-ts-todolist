import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 } from 'uuid';

import { ITodo } from '../../types/todo';

interface IState {
    todos: ITodo[];
}

const initialState: IState = {
    todos: [],
};

export const fetchTodos = createAsyncThunk<ITodo[], void>(
    'todos/fetchTodos',
    async () => {
        const response = await axios.get<ITodo[]>(
            'https://jsonplaceholder.typicode.com/todos?_limit=10'
        );
        return response.data;
    }
);

const todoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo['title']>) => {
            const newTodo: ITodo = {
                id: v4(),
                title: action.payload,
                complete: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action: PayloadAction<ITodo['id']>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        toggleTodo: (state, action: PayloadAction<ITodo['id']>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, complete: !todo.complete }
                    : todo
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.todos = [];
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state) => {
            state.todos = [];
        });
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
