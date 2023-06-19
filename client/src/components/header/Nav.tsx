import React from 'react';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faTrophy,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const NavContainer = tw.nav`
w-[250px] h-full
flex flex-row items-start
`;

const Button = tw.button`
h-full p-[15px] hover:bg-cc-button-header-hover
flex justify-center items-center
`;

const NavIcon = tw(FontAwesomeIcon)`text-cc-icon-nav text-[24px]`;

const NotificationButton = tw(Button)``;
const AchievementsButton = tw(Button)``;
const HelpButton = tw(Button)``;
const ProfileButtonContainer = tw.section`
p-[10px] h-full
flex justify-center items-center
`;

const ProfileButton = tw(Button)`
w-[50px] h-[50px]
bg-cc-red
hover:bg-cc-red
`;

export default function NavComponent() {
  return (
    <NavContainer>
      <NotificationButton>
        <NavIcon icon={faBell}></NavIcon>
      </NotificationButton>
      <AchievementsButton>
        <NavIcon icon={faTrophy}></NavIcon>
      </AchievementsButton>
      <HelpButton>
        <NavIcon icon={faCircleQuestion}></NavIcon>
      </HelpButton>
      <ProfileButtonContainer>
        <Link to='/user'>
          <ProfileButton />
        </Link>
      </ProfileButtonContainer>
    </NavContainer>
  );
}
