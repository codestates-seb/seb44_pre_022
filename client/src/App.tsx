import React from 'react';
import tw from 'twin.macro';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage';
import AskQuestionPage from './pages/AskQuestionPage';
import LoginPage from './pages/LoginPage';
import UserInfoPage from './pages/UserInfoPage';

const AppContainer = tw.div`
w-[100%] h-[100vh] bg-cc-footer
`;

const App = () => {
  return (
    <AppContainer className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<AskQuestionPage />} />
          <Route path='/tags' element={<LoginPage />} />
          <Route path='/users' element={<UserInfoPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
