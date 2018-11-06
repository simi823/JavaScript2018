import * as type from "./constants/actionTypes";

const reducer = (
  state = {
    count: 0,
    todos: [],
    colors: {
      1: "red",
      2: "orange",
      3: "yellow",
      4: "green",
      5: "blue",
      6: "purple"
    }
  },
  action
) => {
  switch (action.type) {
    case type.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case type.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case type.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.userInput]
      };
    case type.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item, index) => {
          return index !== action.todoIndex;
        })
      };
    case type.SELECT_COLOR:
      return {
        ...state,
        selectedColor: state.colors[action.colorId]
      };
    case type.ADD_COLOR:
      const newId = Object.keys(state.colors).length + 1;
      const pair = {[newId]: action.colorName};
      return {
        ...state,
        colors: Object.assign(pair, state.colors)
      };
    case type.DELETE_COLOR:
      function removeKey(obj, deleteKey) {
        let clone = Object.assign({}, obj);
        delete clone[deleteKey];
        return clone;
      }
      return { 
        ...state,
        colors: removeKey(state.colors, action.colorId)
       };
    default:
      return state;
  }
};

export default reducer;
