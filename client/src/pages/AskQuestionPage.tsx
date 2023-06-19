import tw from 'twin.macro';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AskQuestion from '../components/AskQuestion';

const HomeContainer = tw.div`
bg-white
flex flex-col justify-start items-center
`;

const AskQuestionPage = () => {
  return (
    <HomeContainer>
      <Header />
      <AskQuestion />
      <Footer />
    </HomeContainer>
  );
};

export default AskQuestionPage;
