import { atom } from 'recoil';

export interface Question {
  title: string;
  content: string;
  tags: string[];
  comments: string[];
  answers: string[];
}

export const QuestionState = atom<Question>({
  key: 'QuestionState',
  default: {
    title: '',
    content: '',
    tags: [],
    comments: [],
    answers: [],
  },
});
