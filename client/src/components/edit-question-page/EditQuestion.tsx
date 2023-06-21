import { useState } from 'react';
import tw from 'twin.macro';
import { useRecoilState, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { QuestionState, Question } from '../../recoil/questionAtom';
import codeIcon from '../../resources/images/code-icon.svg';
import imageIcon from '../../resources/images/image-icon.svg';
enum Message {
  PLACEHOLDER = 'e.g. Is there an R function for finding the index of an element in a vector',
  ASK_QUESTION = 'Ask a public question',
  CONTENT_TITLE = 'What are the details of your problem?',
  TITLE_DESCRIPTION = 'Be specific and imagine you’re asking a question to another person.',
  CONTENT_DESCRIPTION = 'Introduce the problem and expand on what you put in the title. Minimum 20 characters.',
  TAG_DESCRIPTION = 'Add up to 5 tags to describe what your question is about. Start typing to see suggestions.',
}

/* 전체를 담을 영역 */
const Container = tw.div`
    w-screen h-full
    bg-cc-background

`;
const Form = tw.form`
    
`;
const ContentDiv = tw.div`
    w-2/3 mx-auto
    text-left
`;
const ExplainDiv = tw.div`
    text-cc-text-dark text-4xl
    p-10
`;

const TitleFormDiv = tw.div`
    bg-white
    flex flex-col
    p-10  mb-4
    rounded-lg
    drop-shadow-md
    
`;
const Title = tw.div`
    text-xl text-cc-text-dark text-left font-bold
    p-2 
`;
const Input = tw.input`
    w-full h-12
    border-2 rounded-lg border-cc-input-border
    focus:outline-none
    focus:border-cc-input-border-click 
    focus:ring-4
    focus:ring-cc-button-sky-effect
    

`;
const TextArea = tw.textarea`
    w-full h-80
    border-2 rounded-b-lg border-cc-input-border
    focus:outline-none
    focus:border-cc-input-border-click
    focus:ring-4
    focus:ring-cc-button-sky-effect

`;
const Description = tw.div`
    text-xs text-cc-text-ui
    p-2
`;

const IconContainer = tw.div`
  w-full h-10 top-0
  flex gap-3 
  border-t-2 border-l-2 border-r-2 rounded-t-lg border-cc-input-border
  
`;
const Icons = tw.img`
  w-6 h-6
  my-auto ml-2
`;

const DiscardDraft = tw.button`
  text-cc-red
  text-sm
  w-32 h-10
  hover:bg-pink-50 
  active:bg-pink-100 

  
`;
const SubmitQuestion = tw.button`
  w-44 h-12
  rounded
  text-lg
  text-cc-button-white
  bg-cc-button-blue
`;
const ButtonContainger = tw.div`
  p-4
  flex justify-between
`;
const EditQuestion = () => {
  const [question, setQuestion] = useState<Question>({
    title: '',
    content: '',
    tag: [],
  });
  const setQuestionState = useSetRecoilState(QuestionState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQuestion((prevQuestion: Question) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };
  /* 제출 버튼 클릭 후 해당 글로 이동하는 것과 API 호출하는거 해야함 현재는 json-server로 post 요청 중  */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<Question>(
        'http://localhost:3001/posts',
        question,
        {
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        }
      );
      console.log(response.data);

      setQuestionState(response.data);
    } catch (error) {
      console.error(error);
    }
    // setQuestionState(question);
    // console.log(question);
  };

  return (
    <Container>
      <ContentDiv>
        <ExplainDiv>{Message.ASK_QUESTION}</ExplainDiv>
        <Form onSubmit={handleSubmit}>
          <TitleFormDiv>
            <Title>Title</Title>
            <Description>{Message.TITLE_DESCRIPTION}</Description>
            <Input
              name='title'
              placeholder={Message.PLACEHOLDER}
              value={question.title}
              onChange={handleInputChange}
            ></Input>
          </TitleFormDiv>
          <TitleFormDiv>
            <Title>{Message.CONTENT_TITLE}</Title>
            <Description>{Message.CONTENT_DESCRIPTION}</Description>
            <div>
              <IconContainer>
                <Icons src={codeIcon} />{' '}
                {/* 버튼 배경으로 넣으려고 하니 오류가 발생해 이미지로 대체하였음 / 나중에 버튼으로 감싸면 됨 */}
                <Icons src={imageIcon} />
              </IconContainer>
              <TextArea
                name='content'
                value={question.content}
                onChange={handleInputChange}
              />
            </div>
          </TitleFormDiv>
          <TitleFormDiv>
            <Title>Tags</Title>
            <Description>{Message.TAG_DESCRIPTION}</Description>
            <Input
              name='tag'
              value={question.tag}
              onChange={handleInputChange}
            ></Input>
          </TitleFormDiv>
          <ButtonContainger>
            <DiscardDraft>Discard Draft</DiscardDraft>
            <SubmitQuestion type='submit'>Submit Question</SubmitQuestion>
          </ButtonContainger>
        </Form>
      </ContentDiv>
    </Container>
  );
};

export default EditQuestion;
