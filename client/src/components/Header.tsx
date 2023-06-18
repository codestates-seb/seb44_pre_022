import React from 'react';
import tw from 'twin.macro';

import Logo from './header/Logo';
import SearchBar from './common/SearchBar';
import Nav from './header/Nav';

const HeaderContainer = tw.header`
w-full h-[90px]
flex flex-col justify-center items-center
border-b-[2px] border-cc-border
`;

const BorderTop = tw.section`
w-full h-[5px]
bg-cc-orange
`;

const ContentsContainer = tw.div`
w-full h-[85px]
flex justify-center items-center gap-[20px]
`;

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <BorderTop />
      <ContentsContainer>
        <Logo color='orange' isOnlyIcon={false} />
        <SearchBar type='large' />
        <Nav />
      </ContentsContainer>
    </HeaderContainer>
  );
}
