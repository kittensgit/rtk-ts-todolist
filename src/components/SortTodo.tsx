import { useAppDispatch } from '../redux/hooks';
import { sortTodo } from '../redux/slices/todoSlice';

const SortTodo = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={() => dispatch(sortTodo())}>by alphabet</button>
        </div>
    );
};

export default SortTodo;
