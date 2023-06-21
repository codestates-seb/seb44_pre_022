import React from 'react';
import tw from 'twin.macro';

import { Link } from 'react-router-dom';

import Tag from '../Tag';

const QuestionPreviewContainer = tw.article`
w-[1080px] h-[110px] flex justify-center items-center gap-[50px] border-b-[1px] border-cc-border
`;

const Values = tw.section`w-[120px] flex flex-col items-end`;
const Preview = tw.section`w-[850px] h-full flex flex-col justify-evenly`;

const TextWithLink = tw.a`text-cc-text-link hover:text-cc-text-link-hover`;
const QuestionTitle = tw(TextWithLink)`text-[20px] leading-[24px]`;

const Lower = tw.section`flex justify-between gap-[10px]`;
const Tags = tw.section`
overflow-hidden
flex gap-[5px]
`;
const UploadInfo = tw.section`shrink-0`;

const UploaderName = tw(TextWithLink)`font-bold`;
const UploadDate = tw.span``;

export default function QuestionPreviewComponent() {
  const testText =
    '동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세';

  return (
    <QuestionPreviewContainer>
      <Values>
        <span>0 votes</span>
        <span>0 answers</span>
        <span>2 views</span>
      </Values>
      <Preview>
        <Link to='/questions/0'>
          <QuestionTitle className='line-clamp-2' href='#'>
            {testText}
          </QuestionTitle>
        </Link>
        <Lower>
          <Tags>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
            <Tag>javascript</Tag>
          </Tags>
          <UploadInfo>
            <UploaderName href='#'>Waypil</UploaderName>
            <span> </span>
            <UploadDate>asked 13 secs ago</UploadDate>
          </UploadInfo>
        </Lower>
      </Preview>
    </QuestionPreviewContainer>
  );
}
