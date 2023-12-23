import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 } from 'uuid';

import { ITodo } from '../../types/todo';

interface TodosState {
    todos: ITodo[];
    filteredTodos: ITodo[];
}

const initialState: TodosState = {
    todos: [],
    filteredTodos: [],
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
        filterTodos: (state, action: PayloadAction<string | boolean>) => {
            if (action.payload === 'all') {
                state.filteredTodos = state.todos;
            } else {
                state.filteredTodos = state.todos.filter(
                    (todo) => todo.complete === action.payload
                );
            }
        },
        sortTodo: (state) => {
            state.todos = state.todos.sort((t1: ITodo, t2: ITodo) => {
                return t1.title.localeCompare(t2.title);
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.todos = [];
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload.map((todo) => ({
                ...todo,
                complete: false,
            }));
        });
        builder.addCase(fetchTodos.rejected, (state) => {
            state.todos = [];
        });
    },
});

export const { addTodo, deleteTodo, toggleTodo, filterTodos, sortTodo } =
    todoSlice.actions;
export const todoReducer = todoSlice.reducer;
