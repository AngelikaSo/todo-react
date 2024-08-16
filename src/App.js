import "./App.css";
import "./components/TodoItem.js";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
