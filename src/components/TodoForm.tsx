import { FC, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addTodo } from '../redux/slices/todoSlice';

const TodoForm: FC = () => {
    const [value, setValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleAddTodo = () => {
        setValue('');
        dispatch(addTodo(value));
    };
    return (
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="enter task"
            />
            <button onClick={handleAddTodo}>add task</button>
        </div>
    );
};

export default TodoForm;
