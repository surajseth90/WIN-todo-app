import "./style.scss";
import DeleteIcon from "../../assets/images/delete-icon.svg";
import { useState } from "react";

function Todos(props) {
  const [todos, setTodos] = useState(localStorage.getItem("WINTODOS"));

  const deleteClickHandler = (key) => {
    let todoList = JSON.parse(todos);
    todoList.splice(key, 1);
    localStorage.setItem("WINTODOS", JSON.stringify(todoList));
    setTodos(JSON.stringify(todoList));
  };

  return (
    <div className="todos">
      <span>Today Tasks</span>
      <ul>
        {todos &&
          todos.length > 0 &&
          JSON.parse(todos).map((todo, key) => {
            return (
              <li className="todo" key={key}>
                <div className="todo-left-wrapper">
                  <input type="checkbox" />
                  <span>{todo.title}</span>
                </div>
                <div className="todo-right-wrapper">
                  <button
                    className="todo-edit button-blue"
                    onClick={() => {
                      props.setEditableTodo(todo);
                      props.setScreen(2);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="todo-view button-blue"
                    onClick={() => {
                      props.setViewTodo(todo);
                      props.setScreen(3);
                    }}
                  >
                    View
                  </button>
                  <button
                    className="todo-delete"
                    onClick={() => deleteClickHandler(key)}
                  >
                    <img src={DeleteIcon} alt="Delete" />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Todos;
