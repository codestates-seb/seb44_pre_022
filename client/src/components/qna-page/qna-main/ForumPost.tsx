import React from 'react';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowUp,
  faCircleArrowDown,
} from '@fortawesome/free-solid-svg-icons';

import Tag from '../../common/Tag';
import ProfilePreviewBox from './forum-post/ProfilePreviewBox';
import CommentList from './forum-post/CommentList';

const ForumPostContainer = tw.article`
w-[1080px] border-b-[2px] border-cc-border
flex px-[30px] py-[20px] gap-[30px]
`;

const IconOrigin = tw(FontAwesomeIcon)`
text-[24px] text-cc-button-aside-text
hover:text-cc-orange
`;

const VoteButtonContainer = tw.section`
pt-[10px]
flex flex-col justify-start items-center
`;
const ReputationCount = tw.span``;
const Body = tw.section`
flex flex-col justify-center gap-[20px]
`;
const QuestionText = tw.p`text-[16px]`;
const Tags = tw.section`flex flex-wrap gap-[5px]`;
const UploaderInfo = tw.section`w-full flex justify-end items-end gap-[20px]`;

const EditButton = tw.button`text-[14px] text-cc-text-ui`;
const DeleteButton = tw.button`text-[14px] text-cc-text-ui`;
const AddCommentButton = tw.button`text-[14px] text-cc-text-ui flex`;

export default function ForumPostComponent() {
  const testText =
    '동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 ';

  return (
    <ForumPostContainer>
      <VoteButtonContainer>
        <button>
          <IconOrigin icon={faCircleArrowUp}></IconOrigin>
        </button>
        <ReputationCount>22</ReputationCount>
        <button>
          <IconOrigin icon={faCircleArrowDown}></IconOrigin>
        </button>
      </VoteButtonContainer>
      <Body>
        <QuestionText>{testText}</QuestionText>
        <Tags>
          <Tag>html</Tag>
          <Tag>css</Tag>
          <Tag>javascript</Tag>
        </Tags>
        <UploaderInfo>
          <EditButton>Edit</EditButton>
          <DeleteButton>Delete</DeleteButton>
          <ProfilePreviewBox />
        </UploaderInfo>
        <CommentList />
        <AddCommentButton>Add a comment</AddCommentButton>
      </Body>
    </ForumPostContainer>
  );
}
