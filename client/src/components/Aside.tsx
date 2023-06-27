import React from 'react';
import tw from 'twin.macro';

import { Link, useLocation } from 'react-router-dom';

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

const getPath = () => {
  return useLocation().pathname.substring(1);
};

export default function AsideComponent() {
  /*
  const Button = props.isActive ? ButtonActive : ButtonOrigin;
  const Icon = props.isActive ? IconActive : IconOrigin;
  const Text = props.isActive ? TextActive : TextOrigin;
  */
  const path = getPath();

  return (
    <AsideContainer>
      <LinkTW to='/'>
        <AsideButton isActive={path === ''}>Home</AsideButton>
      </LinkTW>
      <PublicIndicator>Public</PublicIndicator>
      <LinkTW to='/questions'>
        <AsideButton
          isActive={path.startsWith('questions') || path.startsWith('search')}
        >
          Questions
        </AsideButton>
      </LinkTW>
      <LinkTW to='/tags'>
        <AsideButton isActive={path.startsWith('tags')}>Tags</AsideButton>
      </LinkTW>
      <LinkTW to='/users'>
        <AsideButton isActive={path.startsWith('users')}>Users</AsideButton>
      </LinkTW>
    </AsideContainer>
  );
}
