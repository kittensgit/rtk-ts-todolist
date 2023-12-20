import { FC } from 'react';

import { useAppSelector } from '../redux/hooks';

import Todo from './Todo';

const TodoList: FC = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
