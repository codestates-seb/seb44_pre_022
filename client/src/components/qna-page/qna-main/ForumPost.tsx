import React from 'react';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowUp,
  faCircleArrowDown,
} from '@fortawesome/free-solid-svg-icons';

import MarkdownViewer from '../../common/MarkdownViewer';
import Tag from '../../common/Tag';
import ProfilePreviewBox from './forum-post/ProfilePreviewBox';
import CommentList from './forum-post/CommentList';
import { TagType } from '../../../recoil/questionAtom';

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
w-full
flex flex-col justify-center gap-[20px]
`;

const Tags = tw.section`flex flex-wrap gap-[5px]`;
const UploaderInfo = tw.section`w-full flex justify-end items-end gap-[20px]`;

const EditButton = tw.button`text-[14px] text-cc-text-ui`;
const DeleteButton = tw.button`text-[14px] text-cc-text-ui`;
const AddCommentButton = tw.button`text-[14px] text-cc-text-ui flex`;

type Props = {
  type: string; // question, answer
  tags?: string[]; // only in question
  comments: string[];
  children: string;
};

/* 질문/답변 양쪽 모두에서 사용 */
export default function ForumPostComponent(props: Props) {
  const { type, tags, comments, children } = props;

  const testMD = `
  **코드 블록** & *텍스트* 입력!
  \`\`\`
  import React from 'react';
  import tw from 'twin.macro';
  import MDEditor from '@uiw/react-md-editor';
  \`\`\`
  **코드 블록** & *텍스트* 입력!! (2)
  `;

  return (
    <ForumPostContainer>
      <VoteButtonContainer>
        <button>
          <IconOrigin icon={faCircleArrowUp}></IconOrigin>
        </button>
        <ReputationCount>0</ReputationCount>
        <button>
          <IconOrigin icon={faCircleArrowDown}></IconOrigin>
        </button>
      </VoteButtonContainer>
      <Body>
        <MarkdownViewer>{children}</MarkdownViewer>
        {props.type === 'question' ? (
          <Tags>
            {tags?.map((tagName) => (
              <Tag>{tagName}</Tag>
            ))}
          </Tags>
        ) : (
          <></>
        )}
        <UploaderInfo>
          <EditButton>Edit</EditButton>
          <DeleteButton>Delete</DeleteButton>
          <ProfilePreviewBox />
        </UploaderInfo>
        <CommentList comments={comments} />
        <AddCommentButton>Add a comment</AddCommentButton>
      </Body>
    </ForumPostContainer>
  );
}
