import React from 'react';
import tw from 'twin.macro';

import Header from '../components/Header';
import Login from '../components/login-page/Login';

const LoginContainer = tw.div`
`;

const LoginPage = () => {
  return (
    <LoginContainer>
      <Header />
      <Login />;
    </LoginContainer>
  );
};

export default LoginPage;
