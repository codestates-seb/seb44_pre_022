import React from 'react';
import tw from 'twin.macro';

import { Link } from 'react-router-dom';

const CommentListContainer = tw.section`
w-full border-t-[2px] border-cc-border
flex flex-col items-center
`;

const Comment = tw.p`
w-full p-[10px] text-cc-text-dark border-b-[2px]
flex 
`;
const CommentText = tw.span`text-[14px] text-cc-text-dark`;

const TextWithLink = tw.a`text-[14px] text-cc-text-link hover:text-cc-text-link-hover`;
const UploadDate = tw.span`text-[14px] text-cc-text-ui`;

type Props = {
  comments: string[];
};

export default function CommentListComponent(props: Props) {
  const testText =
    '동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 ';

  return (
    <CommentListContainer>
      {props.comments.map((commentText) => {
        return (
          <Comment>
            <CommentText>{commentText}</CommentText>
            <span>&nbsp;-&nbsp;</span>
            <TextWithLink>Waypil</TextWithLink>
            <span>&nbsp;</span>
            <UploadDate>Oct 13, 2015 at 22:34</UploadDate>
          </Comment>
        );
      })}
    </CommentListContainer>
  );
}
