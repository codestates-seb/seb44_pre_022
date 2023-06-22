import { atom } from 'recoil';

type Answer = {
  content: string;
  comments: string[];
};

export type TagType = {
  name: string;
  content: string;
};

export type Question = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  comments: string[];
  answers: Answer[];
};

export const QuestionState = atom<Question>({
  key: 'QuestionState',
  default: {
    id: 0,
    title: '',
    content: '',
    tags: [],
    comments: [],
    answers: [],
  },
});
