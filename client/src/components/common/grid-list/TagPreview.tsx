import React from 'react';
import tw from 'twin.macro';

import Tag from '../Tag';

const TagPreviewContainer = tw.article`
w-[325px] h-[200px]
border-[1px] border-cc-border rounded-[5px]
flex flex-col justify-center items-start gap-[10px] p-[10px]
`;

const Description = tw.p`
w-full h-[100px] text-ellipsis
`;

const Values = tw.section`
w-full flex justify-center items-start
`;
const ValueText = tw.span`
w-full leading-[17px] pl-[5px] text-cc-text-ui
`;

type Props = {
  name: string;
  children: string;
};

export default function TagPreviewComponent(props: Props) {
  return (
    <TagPreviewContainer>
      <Tag>{props.name}</Tag>
      <Description className='line-clamp-4'>{props.children}</Description>
      <Values>
        <ValueText>
          2498904
          <br />
          questions
        </ValueText>
        <ValueText>
          370 asked today
          <br />
          2205 this week
        </ValueText>
      </Values>
    </TagPreviewContainer>
  );
}
