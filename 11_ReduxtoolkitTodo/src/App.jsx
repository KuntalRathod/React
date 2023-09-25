import './App.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">
        Learn about redux tool kit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
