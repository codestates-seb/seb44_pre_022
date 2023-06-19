import { useState } from 'react';
import tw from 'twin.macro';

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
  w-28 h-28
  bg-cc-orange

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
const UserInfo = () => {
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
  return (
    <div>
      <ProfileContainer>
        <ContentDiv1>
          <ProfileImg></ProfileImg>
        </ContentDiv1>
        <ContentDiv2>
          <ProfileNickName>NickName</ProfileNickName>
          <AnsQueButton onClick={handleAnswerButtonClick}>Answers</AnsQueButton>
          <AnsQueButton onClick={handleQuestionButtonClick}>
            Questions
          </AnsQueButton>
        </ContentDiv2>
        <ContentDiv3>
          <LogoutButton>Log Out</LogoutButton>
        </ContentDiv3>
      </ProfileContainer>
      <AnsQueText>Answer</AnsQueText>
    </div>
  );
};

export default UserInfo;
