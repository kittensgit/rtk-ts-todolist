import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Todo from './Todo';
import { fetchTodos } from '../redux/slices/todoSlice';

const TodoList: FC = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchTodos());
    }, []);
    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
