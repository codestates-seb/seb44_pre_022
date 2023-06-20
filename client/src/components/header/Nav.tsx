import React from 'react';
import tw from 'twin.macro';

import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedInState } from '../../recoil/atoms';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faTrophy,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import Button from '../common/Button';

const NavContainer = tw.nav`
w-[250px] h-full
flex flex-row items-start
`;

/* 로그인 상태 */

const ButtonWhenLoggedin = tw.button`
h-full p-[15px] hover:bg-cc-button-header-hover
flex justify-center items-center
`;

const NavIcon = tw(FontAwesomeIcon)`text-cc-icon-nav text-[24px]`;

const NotificationButton = tw(ButtonWhenLoggedin)``;
const AchievementsButton = tw(ButtonWhenLoggedin)``;
const HelpButton = tw(ButtonWhenLoggedin)``;
const ProfileButtonContainer = tw.section`
p-[10px] h-full
flex justify-center items-center
`;

const ProfileButton = tw(ButtonWhenLoggedin)`
w-[50px] h-[50px]
bg-cc-red
hover:bg-cc-red
`;

/* 로그아웃 상태 */
const ButtonsContainer = tw.div`
w-full h-full
flex flex-row items-center gap-[13px]
`;

export default function NavComponent() {
  const [isLoggedIn, setisLoggedIn] = useRecoilState(isLoggedInState);

  return (
    <NavContainer>
      {isLoggedIn ? (
        <>
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
            <Link to='/user/0'>
              <ProfileButton />
            </Link>
          </ProfileButtonContainer>
        </>
      ) : (
        <ButtonsContainer>
          <Link to={'../users/login'}>
            <Button type='sky'>Log in</Button>
          </Link>
          <Link to={'../users/signup'}>
            <Button type='blue'>Sign up</Button>
          </Link>
        </ButtonsContainer>
      )}
    </NavContainer>
  );
}
