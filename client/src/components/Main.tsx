import React from 'react';
import tw from 'twin.macro';

import Submenu from './common/Submenu';
import QuestionPreviewList from './common/QuestionPreviewList';
import TagsList from './common/TagsList';
import UserList from './common/UserList';

const MainContainer = tw.main`
mx-[330px] border-l-2 border-gray-300
flex flex-col justify-start items-center
`;

type Props = {
  type?: string; // undefined, tags, users
};

export default function MainComponent(props: Props) {
  return (
    <MainContainer>
      <Submenu></Submenu>
      {props.type ? (
        props.type === 'tags' ? (
          <TagsList />
        ) : (
          <UserList />
        )
      ) : (
        <QuestionPreviewList />
      )}
    </MainContainer>
  );
}
