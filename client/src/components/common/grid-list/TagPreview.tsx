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

export default function TagPreviewComponent() {
  return (
    <TagPreviewContainer>
      <Tag>javascript</Tag>
      <Description className='line-clamp-4'>
        {
          'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.'
        }
      </Description>
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
