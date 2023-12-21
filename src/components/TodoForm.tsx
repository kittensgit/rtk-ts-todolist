import React, { FC, useState } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { addTodo } from '../redux/slices/todoSlice';

const TodoForm: FC = () => {
    const [value, setValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleAddTodo = () => {
        setValue('');
        dispatch(addTodo(value));
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleEnter}
                type="text"
                placeholder="enter task"
            />
            <button onClick={handleAddTodo}>add</button>
        </div>
    );
};

export default TodoForm;
