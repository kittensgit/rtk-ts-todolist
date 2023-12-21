import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchTodos } from '../redux/slices/todoSlice';

import Todo from './Todo';

const TodoList = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                <Todo todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
