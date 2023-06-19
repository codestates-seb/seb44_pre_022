import tw from 'twin.macro';

import Header from '../components/Header';
import Footer from '../components/Footer';
import EditQuestion from '../components/edit-question-page/EditQuestion';

const Container = tw.div`
bg-white
flex flex-col justify-start items-center
`;

const MiddleContainer = tw.div`
mt-[90px]
max-w-[1410px] w-[100%] h-full
flex

`;

const EditQuestionPage = () => {
  return (
    <Container>
      <Header />
      <MiddleContainer>
        <EditQuestion />
      </MiddleContainer>
      <Footer />
    </Container>
  );
};

export default EditQuestionPage;
