import React from 'react';
import tw from 'twin.macro';

import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';
import Footer from '../components/Footer';

const HomeContainer = tw.div`
bg-white
flex flex-col justify-center items-center
`;

const MainContainer = tw.div`
max-w-[1410px] w-[100vw] h-full
flex
`;

export default function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <MainContainer>
        <Aside />
        <Main />
      </MainContainer>
      <Footer />
    </HomeContainer>
  );
}
