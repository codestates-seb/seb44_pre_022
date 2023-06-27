import React, { useState } from 'react';
import tw from 'twin.macro';
import axios from 'axios';

import { Link, useLocation } from 'react-router-dom';

import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedInState } from '../../../recoil/atoms';
import { UserType } from '../../../recoil/questionAtom';

const ProfileContainer = tw.div`
  w-full h-52
  m-auto 
  flex items-center justify-center
  border-2 border-r-cc-input-border border-l-cc-input-border border-t-cc-input-border border-b-0
  
`;

const ContentDiv1 = tw.div`
  basis-2/12
  h-24
  ml-8
`;
const ContentDiv2 = tw.div`
  basis-8/12
  h-24
`;
const ContentDiv3 = tw.div`
  basis-2/12
  h-24 
`;

const ProfileImg = tw.img`
  w-28 h-28 shadow-md

`;
const ProfileNickName = tw.div`
  text-3xl
  ml-2 mb-8
`;
const AnsQueButton = tw.button`
  w-24 h-12
  mr-2
  rounded-3xl
  text-black
  focus:bg-cc-orange 
  hover:bg-cc-button-white-click
 //텍스트가 포커스 됐을 때 흰색으로 바꾸고 싶은데 클래스가 중복사용됐다고 오류가 뜸 .. 
`;
const LogoutButton = tw.button`
  w-28 h-12
  text-cc-button-white-text
  border-2 border-cc-button-white-text 
  rounded-lg
  hover:bg-cc-button-white-click
`;
const AnsQueText = tw.div`
  w-full h-20
  text-2xl
  m-auto p-8
  border-2 border-r-cc-input-border border-l-cc-input-border border-b-cc-input-border border-t-0
`;

const getUserId = () => {
  const keywords = useLocation().pathname.split('/');
  const numStr = keywords[keywords.length - 1];
  return numStr;
};

const UserInfo = () => {
  const [isLoggedIn, setisLoggedIn] = useRecoilState(isLoggedInState);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState(false);

  const handleAnswerButtonClick = () => {
    setIsAnswerVisible(true);
    setIsQuestionVisible(false);
  };

  const handleQuestionButtonClick = () => {
    setIsQuestionVisible(true);
    setIsAnswerVisible(false);
  };

  console.log(isAnswerVisible);

  const [userObj, setUserObj] = useState<UserType>({
    id: 0,
    image: '',
    name: '',
  });

  const userId = getUserId();
  console.log(userId);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${userId}`)
      .then((response) => {
        console.log(response.data);
        setUserObj(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <div>
      <ProfileContainer>
        <ContentDiv1>
          <ProfileImg src={userObj.image}></ProfileImg>
        </ContentDiv1>
        <ContentDiv2>
          <ProfileNickName>{userObj.name}</ProfileNickName>
          <AnsQueButton onClick={handleAnswerButtonClick}>Answers</AnsQueButton>
          <AnsQueButton onClick={handleQuestionButtonClick}>
            Questions
          </AnsQueButton>
        </ContentDiv2>
        <ContentDiv3>
          <Link to={'../../'}>
            {/* Home 페이지로 리다이렉트 */}
            <LogoutButton onClick={() => setisLoggedIn(false)}>
              Log Out
            </LogoutButton>
          </Link>
        </ContentDiv3>
      </ProfileContainer>
      <AnsQueText>Answer</AnsQueText>
    </div>
  );
};

export default UserInfo;
