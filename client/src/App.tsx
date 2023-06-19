import React from 'react';
import tw from 'twin.macro';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage';
import QuestionsPage from './pages/QuestionsPage';
import TagsPage from './pages/TagsPage';
import UsersPage from './pages/UsersPage';

import TagInfoPage from './pages/TagInfoPage';
import SearchResultPage from './pages/SearchResultPage';

import UserInfoPage from './pages/UserInfoPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EditQuestionPage from './pages/EditQuestionPage';

const AppContainer = tw.div`
w-[100%] h-[100vh] bg-cc-footer
`;

const App = () => {
  return (
    <AppContainer className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<QuestionsPage />} />
          <Route path='/tags' element={<TagsPage />} />
          <Route path='/users' element={<UsersPage />} />

          <Route path='/questions/ask' element={<EditQuestionPage />} />
          <Route path='/search' element={<SearchResultPage />} />

          <Route path='/user/:userId' element={<UserInfoPage />} />
          <Route path='/users/login' element={<LoginPage />} />
          <Route path='/questions/tagged/:tag' element={<TagInfoPage />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
