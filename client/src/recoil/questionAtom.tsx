import { atom } from 'recoil';

interface Question {
  title: string;
  content: string;
  tag: string;
}

export const QuestionState = atom<Question>({
  key: 'exampleState',
  default: {
    title: '',
    content: '',
    tag: '',
  },
});
