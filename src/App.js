import "./App.css";
import "./components/TodoItem.js";
import ToDoList from "./components/TodoList.js";

function App() {
  const sampleToDo = [
    {
      id: 1,
      text: "Test Task",
      completed: true,
    },
    {
      id: 2,
      text: "Test Task",
      completed: false,
    },
  ];

  const toggleComplete = (id) => {
    console.log(`Todo with id ${id} was toggled`);
  };
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoList todos={sampleToDo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
