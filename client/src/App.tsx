import React from 'react';
import tw from 'twin.macro';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import UserInfo from './components/UserInfo';
import AskQuestion from './components/AskQuestion';

const AppContainer = tw.div`
w-[100%] h-[100vh] bg-cc-footer
`;

const App = () => {
  return (
    <AppContainer className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<LoginPage />} />
          <Route path='/tags' element={<UserInfo />} />
          <Route path='/users' element={<AskQuestion />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
