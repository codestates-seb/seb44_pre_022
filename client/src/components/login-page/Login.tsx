import React from 'react';
// import tw from 'tailwind-styled-components';
import tw from 'twin.macro';

import { Link } from 'react-router-dom';

import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedInState } from '../../recoil/atoms';

const LoginContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center
  h-screen
  bg-cc-background
`;

const LoginForm = tw.form`
  flex
  flex-col
  justify-center
  items-start
  mb-6
  p-6
  rounded-[7px]
  shadow-[0 10px 24px rgba(0, 0, 0, 0.05), 0 20px 48px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1)]
  bg-cc-button-blue-text
`;

const Logo = tw.svg`
  mb-6
  w-[32px]
  h-[37px]
`;

const LogoUrl = tw.a`
`;

const Column = tw.div`
  flex
  flex-col
  my-1.5
`;

const Email = tw(Column)``;

const PasswordText = tw.div`
  flex
  justify-between
  items-center
`;

const Password = tw(Column)``;

const Forgot = tw.a`
  text-xs
  text-cc-button-blue-hover
`;

const Label = tw.label`
  my-0.5
  px-0.5
  text-[15px]
  font-semibold
  text-cc-text-dark
`;

const Input = tw.input`
  my-0.5
  p-2
  w-[230px]
  border border-cc-input-border
  rounded-[3px]
  bg-cc-button-blue-text
  text-[13px]

  focus:outline-none
  focus:border-cc-input-border-click
  focus:ring-4
  focus:ring-cc-button-sky-effect
`;

const LoginButton = tw(Column)``;

const Submit = tw.button`
  my-0.5
  p-2.5
  w-[230px]
  border border-solid border-transparent
  rounded-[3px]
  bg-cc-button-blue
  text-[13px]
  text-cc-button-blue-text

  hover:bg-cc-button-blue-hover
  focus:ring-4
  focus:ring-cc-button-sky-effect
  active:bg-cc-button-blue-click
`;

const Message = tw.div`
  p-4
  text-[13px]
  text-cc-text
`;

const BlueSignupText = tw.span`
  text-cc-button-blue-hover
`;

const Login = () => {
  const [isLoggedIn, setisLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <LoginContainer>
      <LogoUrl href='https://stackoverflow.com'>
        <Logo>
          <path d='M26 33v-9h4v13H0V24h4v9h22Z' fill='#BCBBBB' />
          <path
            d='m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z'
            fill='#F48024'
          />
        </Logo>
      </LogoUrl>
      <LoginForm>
        <Email>
          <Label htmlFor='email-text'>Email</Label>
          <Input id='email-text' type='text' />
        </Email>
        <Password>
          <PasswordText>
            <Label htmlFor='password-text'>Password</Label>
            <Forgot href='https://stackoverflow.com/users/account-recovery'>
              Forgot password?
            </Forgot>
          </PasswordText>
          <Input id='password-text' type='password' />
        </Password>
        <Link to={'../../'}>
          {/* Home 페이지로 리다이렉트 */}
          <LoginButton onClick={() => setisLoggedIn(true)}>
            <Submit
            // style={{ boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.4)' }}
            >
              Log in
            </Submit>
          </LoginButton>
        </Link>
      </LoginForm>
      <Message>
        {"Don't have an account? "}
        <Link to='/users/signup'>
          <BlueSignupText>Sign up</BlueSignupText>
        </Link>
      </Message>
    </LoginContainer>
  );
};

export default Login;
