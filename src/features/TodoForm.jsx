import { useRef } from "react";
import { useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel.jsx";
import styled from "styled-components";

const Form = styled.form`
  padding: 0.5rem;
`;

const Button = styled.button`
  &:disabled {
    font-style: italic;
  }
`;

const TodoForm = function ({ onAddTodo, isSaving }) {
  const [workingTodoTitle, setWorkingTodo] = useState("");

  const todoTitleInput = useRef("");

  const handleAddTodo = (event) => {
    event.preventDefault();

    onAddTodo(workingTodoTitle);
    setWorkingTodo("");
    todoTitleInput.current.focus();
  };

  return (
    <>
      <Form onSubmit={handleAddTodo}>
        <TextInputWithLabel
          elementId="todoTitle"
          label="Todo"
          onChange={(event) => {
            return setWorkingTodo(event.target.value);
          }}
          ref={todoTitleInput}
          value={workingTodoTitle}
        />
        <Button disabled={workingTodoTitle.trim() === ""}>
          {isSaving ? "Saving..." : "Add Todo"}
        </Button>
      </Form>
    </>
  );
};

export default TodoForm;
