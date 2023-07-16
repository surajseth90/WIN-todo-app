import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ViewTask from "./components/ViewTask";
import Todos from "./components/Todos";
import "./style.scss";

function App() {
  const [screen, setScreen] = useState(1);
  const [viewTodo, setViewTodo] = useState(null);
  const [editableTodo, setEditableTodo] = useState(null);

  useEffect(() => {
    let arr = [];
    if (localStorage.getItem("WINTODOS")) {
      arr = localStorage.getItem("WINTODOS");
      localStorage.setItem("WINTODOS", arr);
    } else {
      localStorage.setItem("WINTODOS", JSON.stringify([...arr]));
    }
  }, []);

  return (
    <div className="App">
      <div className="app-container">
        <Header setScreen={setScreen} />
        <div className="main-container">
          {screen === 1 ? (
            <Todos
              setViewTodo={setViewTodo}
              setScreen={setScreen}
              setEditableTodo={setEditableTodo}
            />
          ) : screen == 2 ? (
            <AddTask
              setScreen={setScreen}
              editableTodo={editableTodo}
              setEditableTodo={setEditableTodo}
            />
          ) : (
            <ViewTask
              viewTodo={viewTodo}
              setScreen={setScreen}
              setEditableTodo={setEditableTodo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
