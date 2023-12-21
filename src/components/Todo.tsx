import { FC } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { deleteTodo, toggleTodo } from '../redux/slices/todoSlice';

import { ITodo } from '../types/todo';

interface TodoProps {
    todo: ITodo;
}

const Todo: FC<TodoProps> = ({ todo }) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <span
                className={todo.complete ? 'complete' : ''}
                onClick={() => dispatch(toggleTodo(todo.id))}
            >
                {todo.title}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
                delete
            </button>
        </div>
    );
};

export default Todo;
