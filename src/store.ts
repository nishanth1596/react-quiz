import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./feature/Quiz/quizSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
