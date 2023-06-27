import React from 'react';
import tw from 'twin.macro';

import UserInfo from './user-info-main/UserInfo';
import QuestionPreviewList from '../common/QuestionPreviewList';

const MainContainer = tw.main`
mx-[330px] border-l-2 border-gray-300
flex flex-col 
`;

export default function UserInfoMain() {
  return (
    <MainContainer>
      <UserInfo></UserInfo>
      <QuestionPreviewList></QuestionPreviewList>
    </MainContainer>
  );
}
