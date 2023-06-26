import React, { useState } from 'react';
import tw from 'twin.macro';

import { Link, useNavigate } from 'react-router-dom';

import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedInState } from '../../recoil/atoms';
import axios from 'axios';

const LoginContainer = tw.div`
  flex flex-col justify-center items-center
  h-screen
  bg-cc-background
`;

const LoginForm = tw.form`
  flex flex-col justify-center items-start
  mb-6 p-6
  w-[280px]
  rounded-[7px]
  shadow-[0 10px 24px rgba(0, 0, 0, 0.05), 0 20px 48px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1)]
  bg-cc-button-blue-text
`;

const Logo = tw.svg`
  mb-6
  w-[32px] h-[37px]
`;

const LogoUrl = tw.a`
`;

const Column = tw.div`
  flex flex-col
  my-1.5
  w-full
`;

const Email = tw(Column)``;
const Password = tw(Column)``;

const PasswordText = tw.div`
  flex justify-between items-center
`;

const Forgot = tw.a`
  text-xs
  text-cc-button-blue-hover
`;

const Label = tw.label`
  my-0.5 px-0.5
  text-[15px]
  font-semibold
  text-cc-text-dark
`;

const InputContainer = tw.div`
  flex
  relative
`;

const Input = tw.input`
  my-0.5 p-2
  w-full
  border border-cc-input-border rounded-[3px]
  bg-cc-button-blue-text
  text-[13px]

  focus:outline-none
  focus:border-cc-input-border-click
  focus:ring-4
  focus:ring-cc-button-sky-effect
`;

const ErrorSvg = tw.svg`
  absolute
  mt-[-9px]
  top-1/2 right-[0.7em]
  w-[18px] h-[18px]
`;

const ErrorPath = tw.path`
  fill-cc-red
`;

const ErrorMessage = tw.p`
  my-0.5
  text-xs text-cc-red
`;

const LoginButton = tw(Column)`
`;

const Submit = tw.button`
  my-0.5 p-2.5
  border border-solid border-transparent rounded-[3px]
  bg-cc-button-blue
  text-[13px] text-cc-button-blue-text

  hover:bg-cc-button-blue-hover
  focus:ring-4
  focus:ring-cc-button-sky-effect
  active:bg-cc-button-blue-click
`;

const Message = tw.div`
  p-4
  text-[13px] text-cc-text
`;

const BlueSignupText = tw.span`
  text-cc-button-blue-hover
`;

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useRecoilState(isLoggedInState);

  // 이름, 이메일, 비밀번호 초기 상태값 선언
  const [emailValue, setEmailValue] = useState<string>('');
  const [pwValue, setPwValue] = useState<string>('');

  // 오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [pwMessage, setPwMessage] = useState<string>('');
  const [errorSvg, setErrorSvg] = useState('');

  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPw, setIsPw] = useState<boolean>(false);

  const onChangeEmail = (event: any) => {
    const regexEmail =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const currentEmail = event.target.value;
    setEmailValue(currentEmail);

    if (!regexEmail.test(currentEmail)) {
      setEmailMessage('이메일의 형식이 올바르지 않습니다.');
      setIsEmail(false);
      setErrorSvg(
        'M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z'
      );
    } else {
      setEmailMessage('');
      setIsEmail(true);
      setErrorSvg('');
    }
  };

  const onChangePw = (event: any) => {
    const regexPw = /^(?=.*[a-zA-Z])(?=.*[.!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    const currentPw = event.target.value;
    setPwValue(currentPw);

    if (!regexPw.test(currentPw)) {
      setPwMessage(
        '비밀번호는 8~20자, 영문자, 숫자, 특수문자 1개가 포함되어야 합니다.'
      );
      setIsPw(false);
      setErrorSvg(
        'M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z'
      );
    } else {
      setPwMessage('');
      setIsPw(true);
      setErrorSvg('');
    }
  };

  const url = 'http://localhost:3001/login';

  const data = {
    email: emailValue,
    password: pwValue,
  };

  const getTest = async () => {
    const response = await axios.get('http://localhost:3001/member');
    return response.data;
  };

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post(url, data, { withCredentials: true });
      const matchingUser = response.data;

      const retrievedData = await getTest();

      const isMatchingUser = retrievedData.some((user: any) => {
        return (
          user.email === matchingUser.email &&
          user.password === matchingUser.password
        );
      });

      if (isMatchingUser) {
        // Login successful
        console.log('로그인 성공:', matchingUser);
        setisLoggedIn(true); // Update the login state
        navigate('../../');
      } else {
        // Login failed
        console.error('로그인 실패: 유효하지 않은 로그인 정보');
      }
    } catch (error) {
      console.error('로그인 실패:', error.response.data);
    }
  };

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
      <LoginForm onSubmit={handleLogin}>
        <Email>
          <Label htmlFor='email-text'>Email</Label>
          <InputContainer>
            <Input id='email-text' type='text' onChange={onChangeEmail} />
            <ErrorSvg>
              <ErrorPath d={errorSvg} />
            </ErrorSvg>
          </InputContainer>
          <ErrorMessage>{emailMessage}</ErrorMessage>
        </Email>
        <Password>
          <PasswordText>
            <Label htmlFor='password-text'>Password</Label>
            <Forgot href='https://stackoverflow.com/users/account-recovery'>
              Forgot password?
            </Forgot>
          </PasswordText>
          <InputContainer>
            <Input id='password-text' type='password' onChange={onChangePw} />
            <ErrorSvg>
              <ErrorPath d={errorSvg} />
            </ErrorSvg>
          </InputContainer>
          <ErrorMessage>{pwMessage}</ErrorMessage>
        </Password>
        {/* <Link to={'../../'} style={{ width: '100%' }}> */}
        {/* Home 페이지로 리다이렉트 */}
        {/* <LoginButton onClick={() => isLoggedIn}> */}
        <LoginButton onClick={handleLogin}>
          <Submit>Log in</Submit>
        </LoginButton>
        {/* </Link> */}
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
