import React from 'react';
import tw from 'twin.macro';

import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

const AppContainer = tw.div`
w-[100%] h-[100vh] bg-cc-footer
`;

const App = () => {
  return (
    <AppContainer className='App'>
      <Home />
    </AppContainer>
  );
}

export default App;
