import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components'

const Form = styled.form`
padding: 0.5rem;
background-color: #293241;
color: #ffffff;

`;

const FormLine = styled.div`
padding: 0.5rem;
`;

const Input = styled.input`
margin: 0.5rem;
`;


const TodosViewForm = function ({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
  queryString,
  setQueryString,
}) {
  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setQueryString(localQueryString);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [localQueryString, setQueryString]);

  const preventRefresh = (event) => {
    event.preventDefault(debounce);
  };
  return (
    <>
    
      <Form onSubmit={preventRefresh}>
        <FormLine>
          <label>Search todos: </label>
          <Input
            type="text"
            value={localQueryString}
            onChange={(e) => {
              setLocalQueryString(e.target.value);
            }}
          />
          <button
            type="button"
            onSubmit={() => {
              setLocalQueryString("");
            }}
          >
            Clear
          </button>
        </FormLine>
        <FormLine>
          <label>Sort by: </label>
          <select
            onChange={(event) => {
              setSortField(event.target.value);
            }}
            value={sortField}
          >
            <option value="title">Title</option>
            <option value="timeCreated">Time added</option>
          </select>

          <label> Direction: </label>
          <select
            onChange={(event) => {
              setSortDirection(event.target.value);
            }}
            value={sortDirection}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </FormLine>
      </Form>
    </>
  );
};

export default TodosViewForm;
