import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchTodos, filterTodos } from '../redux/slices/todoSlice';

import Todo from './Todo';

const TodoList = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const filteredTodos = useAppSelector((state) => state.todos.filteredTodos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchTodos());
            dispatch(filterTodos('all'));
        };
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        dispatch(filterTodos('all'));
    }, [dispatch, todos]);

    return (
        <div>
            {filteredTodos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
