import React from 'react';
import tw from 'twin.macro';

import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';
import Footer from '../components/Footer';

const HomeContainer = tw.div`
bg-white
flex flex-col justify-start items-center
`;

const MiddleContainer = tw.div`
mt-[90px]
max-w-[1410px] w-[100%] h-full
flex
`;

export default function SearchResultPage() {
  return (
    <HomeContainer>
      <Header />
      <MiddleContainer>
        <Aside />
        <Main />
      </MiddleContainer>
      <Footer />
    </HomeContainer>
  );
}
