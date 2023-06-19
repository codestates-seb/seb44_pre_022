import tw from 'twin.macro';
import Header from '../components/Header';
import Aside from '../components/Aside';
import UserInfoMain from '../components/user-info-page/UserInfoMain';
import Footer from '../components/Footer';

const HomeContainer = tw.div`
bg-white
flex flex-col justify-start items-center
`;
const MiddleContainer = tw.div`
mt-[90px]
max-w-[1410px] w-[100%] h-full
flex
`;

const UserInfoPage = () => {
  return (
    <HomeContainer>
      <Header />
      <MiddleContainer>
        <Aside />
        <UserInfoMain />
      </MiddleContainer>
      <Footer />
    </HomeContainer>
  );
};

export default UserInfoPage;
