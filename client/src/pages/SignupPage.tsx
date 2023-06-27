import React from 'react';
import tw from 'twin.macro';

import Header from '../components/Header';
import Signup from '../components/signup-page/Signup';

const SignupContainer = tw.div`
`;

const SignupPage = () => {
  return (
    <SignupContainer>
      <Header />
      <Signup />
    </SignupContainer>
  );
};

export default SignupPage;
