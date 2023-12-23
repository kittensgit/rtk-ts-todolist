import FilterTodo from './components/FilterTodo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';
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
