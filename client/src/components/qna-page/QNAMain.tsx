import React from 'react';
import tw from 'twin.macro';
import axios from 'axios';

import { Link, useLocation } from 'react-router-dom';

import MarkdownEditor from '../common/MarkdownEditor';
import Button from '../common/Button';
import QusetionInfo from './qna-main/QusetionInfo';
import AnswersInfo from './qna-main/AnswersInfo';
import ForumPost from './qna-main/ForumPost';

import { Question } from '../../recoil/questionAtom';

const QNAMainContainer = tw.main`
mx-[330px] border-l-2 border-gray-300
flex flex-col justify-start items-center
`;

const Forum = tw.section``;
const AddAnswerContainer = tw.section`flex flex-col p-[30px] gap-[30px]`;
const YourAnswerText = tw.h3`text-[20px] font-bold`;

const getForumId = () => {
  const keywords = useLocation().pathname.split('/');
  const numStr = keywords[keywords.length - 1];
  return numStr;
};

export default function QNAMainComponent() {
  const [qObj, setQObj] = React.useState<Question>({
    id: 0,
    title: '',
    content: '',
    tags: [],
    comments: [],
    answers: [],
  });

  const forumId = getForumId();

  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${forumId}`)
      .then((response) => {
        console.log(response.data);
        setQObj(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const { id, title, content, tags, comments, answers } = qObj;

  return (
    <QNAMainContainer>
      <QusetionInfo title={title} />
      <Forum>
        <ForumPost type='question' tags={tags} comments={comments}>
          {content}
        </ForumPost>
        {/* ↑ 질문 영역 ↑ */}
        {answers.length >= 1 ? (
          <AnswersInfo answerCount={answers.length} />
        ) : (
          <></>
        )}
        {/* ↓ 답변 영역 ↓ */}
        {answers.map((aObj) => {
          return (
            <ForumPost type='answer' comments={aObj.comments}>
              {aObj.content}
            </ForumPost>
          );
        })}
        <AddAnswerContainer>
          <YourAnswerText>Your Answer</YourAnswerText>
          <MarkdownEditor />
          <Button type='blue'>Post Your Answer</Button>
        </AddAnswerContainer>
      </Forum>
    </QNAMainContainer>
  );
}
