import React from 'react';
import tw from 'twin.macro';

import './App.css';

import Home from './pages/Home';

const AppContainer = tw.div`
w-[100vw] h-[100vh] bg-cc-footer
`;

export default function App() {
  return (
    <AppContainer className='App'>
      <Home />
    </AppContainer>
  );
}
