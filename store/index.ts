import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./reducers/employeeReducer";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;