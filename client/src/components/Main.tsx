import React from 'react';
import tw from 'twin.macro';

import Submenu from './common/Submenu';
import QuestionPreviewList from './common/QuestionPreviewList';

const MainContainer = tw.main`
mx-[330px] border-l-2 border-gray-300
flex flex-col justify-start items-center
`;

export default function MainComponent() {
  return (
    <MainContainer>
      <Submenu></Submenu>
      <QuestionPreviewList></QuestionPreviewList>
    </MainContainer>
  );
}
