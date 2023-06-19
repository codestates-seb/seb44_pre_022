import React from 'react';

import tw from 'twin.macro';

import './App.css';

import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import UserInfo from './components/UserInfo';
import AskQuestion from './components/AskQuestion';

const AppContainer = tw.div`
w-[100%] h-[100vh] bg-cc-footer
`;

const App = () => {
  return (
    <AppContainer className='App'>
      {/* <Home /> */}
      <SignupPage />
    </AppContainer>
  );
};

export default App;
