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

type Props = {
  id: number;
  title: string;
  tags: string[];
};

export default function QuestionPreviewComponent(props: Props) {
  const { id, title, tags } = props;

  return (
    <QuestionPreviewContainer>
      <Values>
        <span>0 votes</span>
        <span>0 answers</span>
        <span>0 views</span>
      </Values>
      <Preview>
        <Link to={`/questions/${id}`}>
          <QuestionTitle className='line-clamp-2'>{title}</QuestionTitle>
        </Link>
        <Lower>
          <Tags>
            {tags.map((tagName) => (
              <Tag>{tagName}</Tag>
            ))}
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
