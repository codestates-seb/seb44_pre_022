import React from 'react';
import tw from 'twin.macro';
import axios from 'axios';

import { Question } from '../../recoil/questionAtom';
import QuestionPreview from './question-preview-list/QuestionPreview';

const QuestionPreviewListContainer = tw.div`
w-[1080px] flex flex-col 
`;

const EndOfList = tw.section`h-[200px] flex justify-center items-center`;
const EndOfListText = tw.p`text-[20px]`;
const TextWithLink = tw.a`text-cc-text-link hover:text-cc-text-link-hover`;

export default function QuestionPreviewListComponent() {
  const [questionList, setQuestionList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then((response) => {
        console.log(response.data);
        setQuestionList(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <QuestionPreviewListContainer>
      {questionList
        .slice(1)
        .reverse()
        .map((qObj: Question) => {
          return (
            <QuestionPreview id={qObj.id} title={qObj.title} tags={qObj.tags} />
          );
        })}
      <EndOfList>
        <EndOfListText>
          Looking for more? Browse the{' '}
          <TextWithLink href='#'>complete list of questions</TextWithLink>, or{' '}
          <TextWithLink href='#'>popular tags</TextWithLink>.
        </EndOfListText>
      </EndOfList>
    </QuestionPreviewListContainer>
  );
}
