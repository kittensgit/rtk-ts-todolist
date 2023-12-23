import { useAppDispatch } from '../redux/hooks';
import { sortByAlphabet, sortByDate } from '../redux/slices/todoSlice';

const SortTodo = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={() => dispatch(sortByDate())}>by date</button>
            <button onClick={() => dispatch(sortByAlphabet())}>
                by alphabet
            </button>
        </div>
    );
};

export default SortTodo;
