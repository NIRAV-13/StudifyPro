import React, { createContext, useReducer } from "react";
import questions from "../utils/data";

const shuffle = (q) => {
    if (!q) {
      return [];
    }
    return [ q.correctAnswer, ...q.incorrectAnswers,].map((ans) => ({ sort: Math.random(), value: ans }))
      .sort((n1, n2) => n1.sort - n2.sort)
      .map((ans) => ans.value);
  };

const initialState = {
  questions,
  score: 0,
  index: 0,
  answers: shuffle(questions[0]),
  showResults: false,
  answer: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESTART": {
        return initialState;
      }
    case "NEXT": {
      const showResults =
        state.index === state.questions.length - 1;
      const index = showResults ? state.index   : state.index + 1;
      const answers = showResults   ? []    : shuffle(state.questions[index]);
      return { ...state, currentAnswer: "", showResults, index, answers, };
    }
    case "ANSWER": {
        const score =
          action.payload ===
          state.questions[state.index].correctAnswer  ? state.score + 1   : state.score;
        return {  ...state,  score,   currentAnswer: action.payload, };
      }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};