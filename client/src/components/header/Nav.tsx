import React from 'react';
import tw from 'twin.macro';

const NavContainer = tw.nav`
w-[250px] h-full
flex flex-row items-start
`;

const Button = tw.button`
w-[60px] h-full
hover:bg-cc-button-header-hover
`;

const NotificationButton = tw(Button)``;

const AchievementsButton = tw(Button)``;

const HelpButton = tw(Button)``;

const ProfileButtonContainer = tw.section`
w-[70px] h-full
flex justify-end items-center
`;
const ProfileButton = tw(Button)`
w-[50px] h-[50px]
bg-cc-red
hover:bg-cc-red
`;

export default function NavComponent() {
  return (
    <NavContainer>
      <NotificationButton />
      <AchievementsButton />
      <HelpButton />
      <ProfileButtonContainer>
        <ProfileButton />
      </ProfileButtonContainer>
    </NavContainer>
  );
}
