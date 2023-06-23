import React from 'react';
import tw from 'twin.macro';

const AnswersInfoContainer = tw.section`
flex justify-between items-center px-[30px] py-[20px]
`;

const AnswersCount = tw.h3`text-[20px] font-bold`;

const SortSelectionContainer = tw.section`flex items-center gap-[10px]`;

const SelectBar = tw.form`
w-[300px] h-[60px]
px-[15px] py-[10px] gap-[10px] border-[2px] border-gray-300 rounded-[10px]
flex justify-center items-center
`;

type Props = {
  answerCount: number;
};

export default function AnswersInfoComponent(props: Props) {
  return (
    <AnswersInfoContainer>
      <AnswersCount>{`${props.answerCount} Answers`}</AnswersCount>
      <SortSelectionContainer>
        <label>{'Sorted by:'}</label>
        <SelectBar />
      </SortSelectionContainer>
    </AnswersInfoContainer>
  );
}
