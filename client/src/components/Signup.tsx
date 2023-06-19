import React from 'react';
import tw from 'twin.macro';

const SignupContainer = tw.div`
  flex
  flex-col
  justify-center
  items-center
  h-screen
  bg-cc-background
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

const Name = tw.div`
  flex
  flex-col
  my-1.5
`;

const Email = tw.div`
  flex
  flex-col
  my-1.5
`;

const Password = tw.div`
  flex
  flex-col
  my-1.5
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
  w-[280px]
  border border-[#babfc4]
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

const SignupButton = tw.div`
  flex
  flex-col
  my-1.5

`;

const Submit = tw.button`
  my-0.5
  p-[10px]
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

const Signup = () => {
  return (
    <SignupContainer>
      <SignupForm>
        <Name>
          <Label htmlFor='email-text'>Display name</Label>
          <Input id='email-text' type='text' />
        </Name>
        <Email>
          <Label htmlFor='email-text'>Email</Label>
          <Input id='email-text' type='text' />
        </Email>
        <Password>
          <Label htmlFor='password-text'>Password</Label>
          <Input id='password-text' type='password' />
          <Caption>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </Caption>
        </Password>
        <SignupButton>
          <Submit>Sign up</Submit>
        </SignupButton>
        <Caption>
          {'By clicking “Sign up”, you agree to our '}
          <BlueText>terms of service</BlueText>
          {' and acknowledge that you have read and understand our '}
          <BlueText>privacy policy</BlueText>
          {' and '}
          <BlueText>code of conduct</BlueText>.
        </Caption>
      </SignupForm>
      <Message>
        {'Already have an account? '}
        <BlueText href='https://stackoverflow.com/users/login?ssrc=head'>
          Log in
        </BlueText>
      </Message>
    </SignupContainer>
  );
};

export default Signup;
