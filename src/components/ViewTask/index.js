import "./style.scss";
import DeleteIcon from "../../assets/images/delete-icon.svg";
import EditIcon from "../../assets/images/editIcon.svg";
import BackIcon from "../../assets/images/leftArrow.svg";

function ViewTask(props) {
  const { setScreen, viewTodo, setEditableTodo } = props;

  const deleteClickHandler = () => {
    let todoList = JSON.parse(localStorage.getItem("WINTODOS"));
    const key = todoList.findIndex((todo) => todo.id === viewTodo.id);
    todoList.splice(key, 1);
    localStorage.setItem("WINTODOS", JSON.stringify(todoList));
    setScreen(1);
  };

  return (
    <div className="view-task">
      <div className="view-task-text-wrapper">
        <p className="view-task-title">
          <strong>Title: {`${viewTodo.title}`}</strong>
        </p>
        <br />
        <p className="view-task-description">
          Description: {`${viewTodo.description}`}
        </p>
      </div>
      <div className="view-task-actions-wrapper">
        <div>
          <button
            id="backBtn"
            className="view-task-btns"
            onClick={() => setScreen(1)}
          >
            <img src={BackIcon} alt="Back" />
          </button>
          <label htmlFor="backBtn">Back</label>
        </div>
        <div>
          <button
            id="editBtn"
            className="view-task-btns"
            onClick={() => {
              setEditableTodo(viewTodo);
              setScreen(2);
            }}
          >
            <img src={EditIcon} alt="Back" />
          </button>
          <label htmlFor="editBtn">Edit</label>
        </div>
        <div>
          <button
            id="deleteBtn"
            className="view-task-btns"
            onClick={deleteClickHandler}
          >
            <img src={DeleteIcon} alt="Delete" />
          </button>
          <label htmlFor="deleteBtn">Delete</label>
        </div>
      </div>
    </div>
  );
}

export default ViewTask;
