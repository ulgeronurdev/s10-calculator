import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  RESULT,
  MEMORY_ADD,
  MEMORY_RECALL,
  MEMORY_CLEAR,
} from "./actions.jsx";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
  firstOperand: null, // yeni alan
  waitingForOperand: false, // yeni alan
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    default:
      return;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      if (state.waitingForOperand) {
        return {
          ...state,
          total: action.payload,
          waitingForOperand: false,
        };
      }
      return {
        ...state,
        total: state.total * 10 + action.payload,
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        firstOperand: state.total,
        total: 0,
        waitingForOperand: true,
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };
    case RESULT:
      return {
        ...state,
        total: calculateResult(
          state.firstOperand,
          state.total,
          state.operation
        ),
        firstOperand: null,
        waitingForOperand: false,
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.memory + state.total,
      };
    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
      };
    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };
    default:
      return state;
  }
};
