import FilterTodo from './components/FilterTodo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';
import SortTodo from './components/SortTodo';
function App() {
    return (
        <div className="App">
            <TodoForm />
            <FilterTodo />
            <SortTodo />
            <TodoList />
        </div>
    );
}

export default App;
