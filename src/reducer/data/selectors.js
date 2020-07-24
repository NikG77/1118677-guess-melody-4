import {createSelector} from "reselect";
import NameSpace from "../name-space.js";


export const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};

const getRandomFilter = () => {
  // В этом селекторе в аргументах тоже будет state,
  // однако он нам не нужен и мы просто его опускаем.
  // Этот селектор нам нужен для "случайной" генерации
  // набора вопросов из хранилища
  return Math.random() > 0.5;
};

export const getArtistQuestions = createSelector(
    getQuestions,
    getRandomFilter,
    (questions, randomFilter) => {
      return questions.filter((it) => randomFilter && it.type === `artist`);
    }
);

export const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => {
      return questions.filter((it) => it.type === `genre`);
    }
);

