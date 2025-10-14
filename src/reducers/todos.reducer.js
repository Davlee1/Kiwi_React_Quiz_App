export const initialState = {
  todoList: [],
  isLoading: false,
  isSaving: false,
  errorMessage: "",
};

export const actions = {
  //actions in useEffect that loads todos
  fetchTodos: "fetchTodos",
  loadTodos: "loadTodos",
  //found in useEffect and addTodo to handle failed requests
  setLoadError: "setLoadError",
  //actions found in addTodo
  startRequest: "startRequest",
  addTodo: "addTodo",
  endRequest: "endRequest",
  //found in helper functions
  updateTodo: "updateTodo",
  completeTodo: "completeTodo",
  //reverts todos when requests fail
  revertTodo: "revertTodo",
  //action on Dismiss Error button
  clearError: "clearError",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.fetchTodos:
      return {
        ...state,
        isLoading: true,
      };

    case actions.loadTodos:
      const todoArr = action.records.map((record) => {
        const todo = {
          id: record.id,
          ...record.fields,
        };
        if (!todo.isCompleted) {
          todo.isCompleted = false;
        }
        return todo;
      });
      return {
        ...state,
        todoList: [...todoArr],
        isLoading: false,
      };

    case actions.setLoadError:
      return {
        ...state,
        errorMessage: action.error,
        isLoading: false,
      };

    case actions.startRequest:
      return {
        ...state,
        isSaving: true,
      };

    case actions.addTodo:
      const savedTodo = {
        id: action.records[0].id,
        ...action.records[0].fields,
      };
      if (!action.records[0].fields.isCompleted) {
        savedTodo.isCompleted = false;
      }
      return {
        ...state,
        todoList: [...state.todoList, savedTodo],
        isSaving: false,
      };

    case actions.endRequest:
      return {
        ...state,
        isLoading: false,
        isSaving: false,
      };

    case actions.revertTodo:
      const originalTodo = state.todoList.find(
        (todo) => todo.id === editedTodo.id
      );
      const revertedState = { ...state, originalTodo };
      return {
        revertedState,
      };

    case actions.updateTodo:
      const updatedTodos = state.todoList.map((x) => {
        if (x.id === action.editedTodo.id) {
          return { ...action.editedTodo };
        }
        return x;
      });
      const updatedState = { ...state, todoList: updatedTodos };
      if (action.error) {
        updatedState = { ...updatedState, errorMessage: action.error.message };
      }
      return updatedState;

    case actions.completeTodo:
      const completedTodos = state.todoList.map((x) => {
        if (x.id === action.editedTodo.id) {
          return { ...x, isCompleted: true };
        }
        return x;
      });
      return {
        ...state,
        todoList: completedTodos,
      };

    case actions.clearError:
      return {
        ...state,
        errorMessage: "",
      };
  }
}
