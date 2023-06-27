import React from 'react';
import tw from 'twin.macro';
import axios from 'axios';

import SearchBar from '../common/SearchBar';
import Button from '../common/Button';
import SortButtons from './submenu/SortButtons';

import { Link, useLocation } from 'react-router-dom';
import { TagType } from '../../recoil/questionAtom';

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

const getTagNameFromPageName = (pageName: string) => {
  return pageName.split('/')[1];
};

const getTitle = (pageName: string) => {
  if (pageName === 'Home') {
    return 'Top Questions';
  } else if (pageName === 'Questions') {
    return 'All Questions';
  } else if (pageName.startsWith('Tag/')) {
    return `Questions tagged [${getTagNameFromPageName(pageName)}]`;
  } else if (pageName === 'Search') {
    return 'Search Results';
  } else {
    return pageName;
  }
};

export default function SubmenuComponent() {
  const pageName = getPageName();
  const title = getTitle(pageName);
  const [tag, setTag] = React.useState<TagType>({
    name: '',
    content: '',
  });

  /* 최적화 필요: 태그 하나를 불러오는 데 서버에서 모든 태그들을 요청함. */
  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/tags`)
      .then((response) => {
        const tag = response.data.find(
          (tagObj: TagType) => tagObj.name === getTagNameFromPageName(pageName)
        );
        setTag(tag);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <SubmenuContainer>
      <Upper>
        <Title>{title}</Title>
        <Link to='../questions/ask'>
          <Button type={'blue'}>Ask Question</Button>
        </Link>
      </Upper>
      {tag ? <Description>{tag.content}</Description> : <></>}
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
