import React from 'react';
import tw from 'twin.macro';

import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

const SubmenuContainer = tw.div`
w-[1080px] p-[30px] flex flex-col gap-[30px] border-b-[2px] border-cc-border
`;

const Upper = tw.div`flex justify-between`;
const Description = tw.p`p-[10px]`;
const Lower = tw.div`flex justify-between items-end`;
const UIs = tw.div`flex items-center gap-[20px]`;

const Title = tw.h2`text-[42px]`;
const QuantityText = tw.span`text-[24px]`;
const SortButtons = tw.section`flex rounded-[5px] border-[2px] border-cc-border`;

export default function SubmenuComponent() {
  return (
    <SubmenuContainer>
      <Upper>
        <Title>Title</Title>
        <Button type={'blue'}>Ask Question</Button>
      </Upper>
      <Description>
        {
          'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.'
        }
      </Description>
      <Lower>
        <QuantityText>22 Questions</QuantityText>
        <UIs>
          <SearchBar type='short'></SearchBar>
          <SortButtons>
            <Button type='sort'>Hot</Button>
            <Button type='sort'>Week</Button>
            <Button type='sort'>Month</Button>
          </SortButtons>
          <Button type='sky'>Filter</Button>
        </UIs>
      </Lower>
    </SubmenuContainer>
  );
}
