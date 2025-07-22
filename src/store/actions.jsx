import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const RESULT = "RESULT";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => ({ type: CLEAR_DISPLAY });
export const result = () => ({ type: RESULT });
export const memoryAdd = () => ({ type: MEMORY_ADD });
export const memoryRecall = () => ({ type: MEMORY_RECALL });
export const memoryClear = () => ({ type: MEMORY_CLEAR });
