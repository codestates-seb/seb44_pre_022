import React from 'react';

import tw from 'twin.macro';

import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AskQuestionPage from './pages/AskQuestionPage';
const AppContainer = tw.div`
w-[100%] h-[100vh] bg-cc-footer
`;

const App = () => {
  return (
    <AppContainer className='App'>
      <AskQuestionPage />
    </AppContainer>
  );
};

export default App;
