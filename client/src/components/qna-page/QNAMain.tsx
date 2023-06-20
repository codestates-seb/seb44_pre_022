import React from 'react';
import tw from 'twin.macro';

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

const TitleText = tw.h2``;
const QusetionInfo = tw.p``;
const Forum = tw.section``;
const AnswersQuantity = tw.span``;
const SortSelectionContainer = tw.section``;

export default function QNAMainComponent() {
  return (
    <QNAMainContainer>
      <TitleContainer>
        <TitleText></TitleText>
        <QusetionInfo></QusetionInfo>
      </TitleContainer>
      <Forum>
        <ForumPost></ForumPost>
        <div>
          <AnswersQuantity></AnswersQuantity>
          <SortSelectionContainer></SortSelectionContainer>
        </div>
        <ForumPost></ForumPost>
      </Forum>
    </QNAMainContainer>
  );
}
