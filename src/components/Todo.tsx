import { FC } from 'react';
import { ITodo } from '../types/todo';
import { useAppDispatch } from '../redux/hooks';
import { deleteTodo } from '../redux/slices/todoSlice';

interface TodoProps {
    todo: ITodo;
}

const Todo: FC<TodoProps> = ({ todo }) => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <span>{todo.task}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
                delete
            </button>
        </div>
    );
};

export default Todo;
