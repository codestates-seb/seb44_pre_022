import React from 'react';
import tw from 'twin.macro';

import Logo from './header/Logo';
import SearchBar from './common/SearchBar';
import Nav from './header/Nav';

import { Link } from 'react-router-dom';

const HeaderContainer = tw.header`

fixed w-full h-[90px] bg-white border-b-[2px] border-cc-border
flex flex-col justify-center items-center
z-10
`;

const BorderTop = tw.section`
w-full h-[5px]
bg-cc-orange
`;

const ContentsContainer = tw.div`
w-full h-[85px]
flex justify-center items-center gap-[20px]
`;

const LinkLogo = tw(Link)`h-full`;

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <BorderTop />
      <ContentsContainer>
        <LinkLogo to='/'>
          <Logo color='orange' isOnlyIcon={false} />
        </LinkLogo>
        <Link to='/search'>
          <SearchBar type='large' />
        </Link>
        <Nav />
      </ContentsContainer>
    </HeaderContainer>
  );
}
