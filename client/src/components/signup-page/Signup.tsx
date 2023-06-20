import React from 'react';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';

const SignupContainer = tw.div`
  flex
  justify-center
  items-center
  h-screen
  p-6
  bg-cc-background
`;

const TextForm = tw.div`
  mr-12
  mb-32
`;

const Title = tw.h1`
  mb-8
  text-[27px]
  text-cc-text
`;

const ContentList = tw.div`
  flex
  mb-6
`;

const ContentLogo = tw.svg`
  w-[26px]
  h-[26px]
  mr-2
`;

const Path = tw.path`
  fill-cc-button-blue
`;

const Content = tw.div`
`;

const SignupFormContainer = tw.div`
  flex
  flex-col
  items-center
`;

const SignupForm = tw.form`
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

const Column = tw.div`
  flex
  flex-col
  my-1.5
`;

const Name = tw(Column)``;

const Email = tw(Column)``;

const Password = tw(Column)``;

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
  w-[280px]
  border border-cc-input-border
  rounded-[3px]
  bg-cc-button-blue-text
  text-[13px]

  focus:outline-none
  focus:border-cc-input-border-click
  focus:ring-4
  focus:ring-cc-button-sky-effect
`;

const Caption = tw.div`
  my-1
  w-[280px]
  text-xs
  text-cc-text-ui
`;

const SignupButton = tw(Column)``;

const Submit = tw.button`
  my-0.5
  p-2.5
  w-[280px]
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

const BlueText = tw.a`
  text-cc-button-blue-hover
`;

const Message = tw.div`
  p-4
  text-[13px]
  text-cc-text
`;

const ContentMessage = tw.div`
  text-[13px]
  text-cc-text
`;

const BlueLoginText = tw.span`
  text-cc-button-blue-hover
`;

const Signup = () => {
  return (
    <SignupContainer>
      <TextForm>
        <Title>Join the Stack Overflow community</Title>
        <ContentList>
          <ContentLogo>
            <Path
              opacity='.5'
              d='M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z'
            ></Path>
            <Path d='M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z'></Path>
          </ContentLogo>
          <Content>Get unstuck — ask a question</Content>
        </ContentList>
        <ContentList>
          <ContentLogo>
            <Path d='M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z'></Path>
            <Path
              opacity='.5'
              d='M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z'
            ></Path>
          </ContentLogo>
          <Content>Unlock new privileges like voting and commenting</Content>
        </ContentList>
        <ContentList>
          <ContentLogo>
            <Path d='M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z'></Path>
            <Path
              opacity='.5'
              d='M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z'
            ></Path>
          </ContentLogo>
          <Content>
            Save your favorite questions, answers, watch tags, and more
          </Content>
        </ContentList>
        <ContentList>
          <ContentLogo>
            <Path d='M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z'></Path>
          </ContentLogo>
          <Content>Earn reputation and badges</Content>
        </ContentList>
        <ContentMessage>
          {'Collaborate and share knowledge with a private group for FREE. '}
          <br />
          <BlueText href='https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up'>
            Get Stack Overflow for Teams free for up to 50 users.
          </BlueText>
        </ContentMessage>
      </TextForm>
      <SignupFormContainer>
        <SignupForm>
          <Name>
            <Label htmlFor='name-text'>Display name</Label>
            <Input id='name-text' type='text' />
          </Name>
          <Email>
            <Label htmlFor='email-text'>Email</Label>
            <Input id='email-text' type='text' />
          </Email>
          <Password>
            <Label htmlFor='password-text'>Password</Label>
            <Input id='password-text' type='password' />
            <Caption>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </Caption>
          </Password>
          <SignupButton>
            <Submit>Sign up</Submit>
          </SignupButton>
          <Caption>
            {'By clicking “Sign up”, you agree to our '}
            <BlueText href='https://stackoverflow.com/legal/terms-of-service/public'>
              terms of service
            </BlueText>
            {' and acknowledge that you have read and understand our '}
            <BlueText href='https://stackoverflow.com/legal/privacy-policy'>
              privacy policy
            </BlueText>
            {' and '}
            <BlueText href='https://stackoverflow.com/conduct'>
              code of conduct
            </BlueText>
            .
          </Caption>
        </SignupForm>
        <Message>
          {'Already have an account? '}
          <Link to='/users/login'>
            <BlueLoginText>Log in</BlueLoginText>
          </Link>
        </Message>
      </SignupFormContainer>
    </SignupContainer>
  );
};

export default Signup;
