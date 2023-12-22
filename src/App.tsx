import './App.css';
import FilterTodo from './components/FilterTodo';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <TodoForm />
            <FilterTodo />
            <TodoList />
        </div>
    );
}

export default App;
