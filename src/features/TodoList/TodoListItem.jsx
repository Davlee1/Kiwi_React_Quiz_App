import { useState } from "react";
import { useEffect } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel.jsx";
import styles from "./TodoListItem.module.css";

const TodoListItem = function ({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setworkingTitle] = useState(todo.title);

  useEffect(() => {
    setworkingTitle(todo.title);
}, [todo])

  const handleCancel = () => {
    setworkingTitle(todo.title);
    setIsEditing(false);
  };

  const handleEdit = (event) => {
    setworkingTitle(event.target.value);
  };

  const handleUpdate = (event) => {
    if (isEditing == false) {
      return;
    } else {
      event.preventDefault();
      onUpdateTodo({ ...todo, title: workingTitle });
      setIsEditing(false);
    }
  };

  return (
    <li className={styles.TodoListItem}>
      {isEditing ? (
        <>
          <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
        </>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              id={`checkbox${todo.id}`}
              checked={todo.isCompleted}
              onChange={() => onCompleteTodo(todo)}
            />
          </label>
          <span onClick={() => setIsEditing(true)}>{todo.title}</span>
        </>
      )}
    </li>
  );
};

export default TodoListItem;
