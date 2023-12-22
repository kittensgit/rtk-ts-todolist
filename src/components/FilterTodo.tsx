import { FC } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { filterTodos } from '../redux/slices/todoSlice';

const FilterTodo: FC = () => {
    const dispatch = useAppDispatch();

    const filterTodoHandler = (status: string | boolean) => {
        dispatch(filterTodos(status));
    };

    return (
        <div>
            <button onClick={() => filterTodoHandler('all')}>all</button>
            <button onClick={() => filterTodoHandler(true)}>completed</button>
            <button onClick={() => filterTodoHandler(false)}>
                uncompleted
            </button>
        </div>
    );
};

export default FilterTodo;
