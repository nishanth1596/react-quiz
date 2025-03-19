import { createSlice } from "@reduxjs/toolkit";
import { QuizState } from "../../types/types";

const initialState: QuizState = {
  currentQuestionIndex: 0,
  points: 0,

  currentTitle: "",
  img: "",
  color: "",

  isUserSelectedOptionCorrect: null,
  isAnswerSubmitted: false,
  correctAnswerOption: undefined,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectTitle(state, action) {
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
    },

    nextQuestion(state) {
      state.currentQuestionIndex++;
      state.isAnswerSubmitted = false;
      state.correctAnswerOption = undefined;
    },
  },
});

export const { nextQuestion, selectTitle, selectOption } = quizSlice.actions;
export default quizSlice.reducer;

export const getisAnswerSubmitted = (store) => store.quiz.isAnswerSubmitted;

export const getCurrentQuestionIndex = (store) =>
  store.quiz.currentQuestionIndex;

export const getPoints = (store) => store.quiz.points;
