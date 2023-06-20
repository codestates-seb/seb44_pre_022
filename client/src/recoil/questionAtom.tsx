import { atom } from 'recoil';

export interface Question {
  title: string;
  content: string;
  tag: string;
}

export const QuestionState = atom<Question>({
  key: 'QuestionState',
  default: {
    title: '',
    content: '',
    tag: '',
  },
});
