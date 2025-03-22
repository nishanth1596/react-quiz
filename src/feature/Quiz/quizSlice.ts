import { createSlice } from "@reduxjs/toolkit";
import { QuizState } from "../../types/types";

const initialState: QuizState = {
  theme: "light",

  status: "ready",
  currentQuestionIndex: 9,
  points: 0,

  currentTitle: "",
  img: "",
  color: "",

  isUserSelectedOptionCorrect: null,
  isAnswerSubmitted: false,
  correctAnswerOption: undefined,
  isAnswerSubmittedWithoutSelectingOption: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectTitle(state, action) {
      Object.assign(state, initialState);
      state.status = "started";
      state.currentTitle = action.payload.title;
      state.color = action.payload.color;
      state.img = action.payload.img;
    },

    selectOption(state, action) {
      // 1. fetch the user selected option
      // 2. fetch the answer for that selected option
      // 3. check whether the user selected option is correct or not
      // 4. if answer is correct, add points, change currentQuestionIndex, show if chosen answer is correct or not
      // This should happen after clicking submission only

      const { correctAnswerOption, userSelectedOption } = action.payload;

      state.isUserSelectedOptionCorrect =
        correctAnswerOption === userSelectedOption;

      if (state.isUserSelectedOptionCorrect) {
        state.points++;
        state.correctAnswerOption = action.payload.correctAnswerOption;
      }

      state.isAnswerSubmitted = true;
      state.isAnswerSubmittedWithoutSelectingOption = false;
    },

    noAnswerSelected(state) {
      state.isAnswerSubmittedWithoutSelectingOption = true;
    },

    nextQuestion(state) {
      if (state.status !== "ready") return state;

      state.currentQuestionIndex++;
      state.isAnswerSubmitted = false;
      state.correctAnswerOption = undefined;
      state.isUserSelectedOptionCorrect = null;
    },

    lastQuestion(state) {
      // Mark the quiz as completed
      state.status = "completed";
    },

    playAgain(state) {
      return { ...initialState, theme: state.theme };
    },

    toggleTheme(state, action) {
      state.theme = action.payload;
      state.theme = action.payload === true ? "dark" : "light";
    },
  },
});

export const {
  nextQuestion,
  selectTitle,
  selectOption,
  noAnswerSelected,
  lastQuestion,
  playAgain,
  toggleTheme,
} = quizSlice.actions;
export default quizSlice.reducer;

export const getisAnswerSubmitted = (store) => store.quiz.isAnswerSubmitted;

export const getCurrentQuestionIndex = (store) =>
  store.quiz.currentQuestionIndex;

export const getPoints = (store) => store.quiz.points;

export const getIsNoAnswerSelected = (store) =>
  store.quiz.isAnswerSubmittedWithoutSelectingOption;

export const getStatus = (store) => store.quiz.status;

export const getTitle = (store) => store.quiz.currentTitle;

export const getTheme = (store) => store.quiz.theme;
