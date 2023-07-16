import { useEffect, useState } from "react";
import "./style.scss";

function AddTask(props) {
  const { setScreen, editableTodo, setEditableTodo } = props;

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editableTodo) {
      let todo = { ...task };
      todo.title = editableTodo.title;
      todo.description = editableTodo.description;
      setTask(todo);
    }
  }, []);

  const onChangeHandler = (e, val) => {
    let obj = { ...task };
    if (val === "title") obj.title = e.target.value;
    else obj.description = e.target.value;
    setTask(obj);
  };

  const submitBtnHandler = (e) => {
    e.preventDefault();
    let todo = { ...task };
    let todos = localStorage.getItem("WINTODOS");
    let arr = JSON.parse(todos);
    if (!editableTodo) {
      todo.id = Date.now();
      arr.push(todo);
    } else {
      let index = arr.findIndex((obj) => obj.id === editableTodo.id);
      todo.id = editableTodo.id;
      arr[index] = todo;
      setEditableTodo(null);
    }
    localStorage.setItem("WINTODOS", JSON.stringify(arr));
    setScreen(1);
  };

  return (
    <div className="add-task">
      <form onSubmit={submitBtnHandler}>
        <input
          className="add-title"
          onChange={(e) => onChangeHandler(e, "title")}
          placeholder="Title"
          value={task.title}
        />
        <textarea
          placeholder="Description"
          className="add-description"
          onChange={(e) => onChangeHandler(e, "des")}
          value={task.description}
          size="50"
        ></textarea>
        <button type="submit" className="add-task-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTask;
