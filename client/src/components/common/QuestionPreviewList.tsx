import React from 'react';
import tw from 'twin.macro';

import QuestionPreview from './question-preview-list/QuestionPreview';

const QuestionPreviewListContainer = tw.div`
w-[1080px] flex flex-col 
`;

const EndOfList = tw.section`h-[200px] flex justify-center items-center`;
const EndOfListText = tw.p`text-[20px]`;
const TextWithLink = tw.a`text-cc-text-link hover:text-cc-text-link-hover`;

export default function QuestionPreviewListComponent() {
  return (
    <QuestionPreviewListContainer>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
      <QuestionPreview></QuestionPreview>
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
