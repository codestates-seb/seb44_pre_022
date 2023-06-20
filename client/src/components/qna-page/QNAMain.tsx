import React from 'react';
import tw from 'twin.macro';

import Button from '../common/Button';
import ForumPost from './qna-main/ForumPost';

const QNAMainContainer = tw.main`
mx-[330px] border-l-2 border-gray-300
flex flex-col justify-start items-center
`;

/*
type Props = {
  type?: string; // undefined, tags, users
};
*/

const TitleContainer = tw.section`
w-[1080px] p-[30px] flex flex-col gap-[30px] border-b-[2px] border-cc-border
`;
const AddAnswerContainer = tw.section``;

const TitleText = tw.h2`
text-[30px]
`;
const QusetionInfo = tw.p``;
const Forum = tw.section``;

const AnswerListHeader = tw.section`
flex justify-between items-center px-[30px] py-[20px] 
`;
const AddAnswerHeader = tw(AnswerListHeader)``;
const AnswersQuantity = tw.h3`text-[20px] font-bold`;
const YourAnswerText = tw(AnswersQuantity)``;
const SortSelectionContainer = tw.section`flex items-center gap-[10px]`;

const SelectBar = tw.form`
w-[300px] h-[60px]
px-[15px] py-[10px] gap-[10px] border-[2px] border-gray-300 rounded-[10px]
flex justify-center items-center
`;

export default function QNAMainComponent() {
  const testText =
    '동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세';

  return (
    <QNAMainContainer>
      <TitleContainer>
        <TitleText>{testText}</TitleText>
        <QusetionInfo>
          {
            'Asked 14 years, 7 months ago Modified 2 years, 8 months ago Viewed 365k times'
          }
        </QusetionInfo>
      </TitleContainer>

      <Forum>
        <ForumPost></ForumPost> {/* 질문 영역 */}
        <AnswerListHeader>
          <AnswersQuantity>22 Answers</AnswersQuantity>
          <SortSelectionContainer>
            <label>{'Sorted by:'}</label>
            <SelectBar></SelectBar>
          </SortSelectionContainer>
        </AnswerListHeader>
        <ForumPost></ForumPost> {/* 답변 영역 */}
        <ForumPost></ForumPost> {/* 답변 영역 */}
        <AddAnswerContainer>
          <AddAnswerHeader>
            <YourAnswerText>Your Answer</YourAnswerText>
          </AddAnswerHeader>
          <Button type='blue'>Post Your Answer</Button>
        </AddAnswerContainer>
      </Forum>
    </QNAMainContainer>
  );
}
