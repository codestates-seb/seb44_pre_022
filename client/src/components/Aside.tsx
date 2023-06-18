import React from 'react';
import tw from 'twin.macro';

import AsideButton from '../components/aside/AsideButton';

const AsideContainer = tw.aside`
w-[330px]
border-r-2 border-gray-300
flex flex-col items-start py-[20px] 
`;

const PublicIndicator = tw.section`
w-full h-[60px]
flex items-end
`;

export default function AsideComponent() {
  return (
    <AsideContainer>
      <AsideButton isCurrentPage={true}>Home</AsideButton>
      <PublicIndicator>Public</PublicIndicator>
      <AsideButton>Questions</AsideButton>
      <AsideButton>Tags</AsideButton>
      <AsideButton>Users</AsideButton>
    </AsideContainer>
  );
}
