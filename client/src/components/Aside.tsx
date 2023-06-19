import React from 'react';
import tw from 'twin.macro';

import AsideButton from '../components/aside/AsideButton';

const AsideContainer = tw.aside`
fixed w-[330px] bg-white
flex flex-col items-start py-[20px] 
`;

const PublicIndicator = tw.section`
w-full h-[60px]
flex items-end
`;

export default function AsideComponent() {
  return (
    <AsideContainer>
      <AsideButton isActive={true}>Home</AsideButton>
      <PublicIndicator>Public</PublicIndicator>
      <AsideButton>Questions</AsideButton>
      <AsideButton>Tags</AsideButton>
      <AsideButton>Users</AsideButton>
    </AsideContainer>
  );
}
