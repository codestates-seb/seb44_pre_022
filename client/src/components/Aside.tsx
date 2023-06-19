import React from 'react';
import tw from 'twin.macro';

import { Link } from 'react-router-dom';

import AsideButton from '../components/aside/AsideButton';

const AsideContainer = tw.aside`
fixed w-[330px] bg-white
flex flex-col items-start py-[20px] 
`;

const PublicIndicator = tw.section`
w-full h-[60px]
flex items-end
`;

const LinkTW = tw(Link)`w-full h-full`;

export default function AsideComponent() {
  return (
    <AsideContainer>
      <LinkTW to='/'>
        <AsideButton isActive={true}>Home</AsideButton>
      </LinkTW>
      <PublicIndicator>Public</PublicIndicator>
      <LinkTW to='/questions'>
        <AsideButton>Questions</AsideButton>
      </LinkTW>
      <LinkTW to='/tags'>
        <AsideButton>Tags</AsideButton>
      </LinkTW>
      <LinkTW to='/users'>
        <AsideButton>Users</AsideButton>
      </LinkTW>
    </AsideContainer>
  );
}
