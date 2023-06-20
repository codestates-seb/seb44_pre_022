import React from 'react';
import tw from 'twin.macro';

const ForumPostContainer = tw.article`
`;

const VoteButtonContainer = tw.section``;
const Body = tw.section``;
const QuestionText = tw.p``;
const Tags = tw.section``;
const UploaderInfo = tw.section``;
const CommentList = tw.section``;
const AddCommentButton = tw.section``;

export default function ForumPostComponent() {
  return (
    <ForumPostContainer>
      <VoteButtonContainer></VoteButtonContainer>
      <Body>
        <QuestionText></QuestionText>
        <Tags></Tags>
        <UploaderInfo></UploaderInfo>
        <CommentList></CommentList>
        <AddCommentButton></AddCommentButton>
      </Body>
    </ForumPostContainer>
  );
}
