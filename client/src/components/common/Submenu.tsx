import React from 'react';
import tw from 'twin.macro';

import SearchBar from '../common/SearchBar';
import Button from '../common/Button';
import SortButtons from './submenu/SortButtons';

import { useLocation } from 'react-router-dom';

/* [해당 페이지에서 사용됨]
/(Home) : Top Questions
/questions : All Questions
/tags : Tags
/users : Users
태그 상세 페이지(/questions/tagged/<tagName>): Questions tagged [javascript]
검색 결과 페이지(/search) : Search Results
*/

const SubmenuContainer = tw.div`
w-[1080px] p-[30px] flex flex-col gap-[30px] border-b-[2px] border-cc-border
`;

const Upper = tw.div`flex justify-between`;
const Description = tw.p`p-[10px]`;
const Lower = tw.div`flex justify-between items-end`;
const UIs = tw.div`flex items-center gap-[20px]`;

const Title = tw.h2`text-[42px]`;
const QuantityText = tw.span`text-[24px]`;

const getPageName = () => {
  const path = useLocation().pathname.substring(1);
  if (path === '') {
    return 'Home';
  } else if (path.startsWith('questions/tagged')) {
    const tagName = path.split('questions/tagged/')[1].split('?')[0];
    return `Tag/${tagName}`;
  } else {
    // questions tags users search
    return path.charAt(0).toUpperCase() + path.slice(1);
  }
};

const getTitle = (pageName: string) => {
  if (pageName === 'Home') {
    return 'Top Questions';
  } else if (pageName === 'Questions') {
    return 'All Questions';
  } else if (pageName.startsWith('Tag/')) {
    return `Questions tagged [${pageName.split('/')[1]}]`;
  } else if (pageName === 'Search') {
    return 'Search Results';
  } else {
    return pageName;
  }
};

type Props = {
  children?: string;
};

export default function SubmenuComponent(props: Props) {
  const pageName = getPageName();
  const title = getTitle(pageName);

  return (
    <SubmenuContainer>
      <Upper>
        <Title>{title}</Title>
        <Button type={'blue'}>Ask Question</Button>
      </Upper>
      {props.children ? (
        <Description>
          {
            'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.'
          }
        </Description>
      ) : (
        <></>
      )}
      <Lower>
        <QuantityText>22 Questions</QuantityText>
        <UIs>
          {['Tags', 'Users'].includes(pageName) ? (
            <SearchBar type='short'></SearchBar>
          ) : (
            <></>
          )}
          <SortButtons pageName={pageName} />
          {['Questions', 'Tags', 'Search'].includes(pageName) ? (
            <Button type='sky'>Filter</Button>
          ) : (
            <></>
          )}
        </UIs>
      </Lower>
    </SubmenuContainer>
  );
}
