import React from 'react';
import tw from 'twin.macro';

const QusetionInfoContainer = tw.section`
w-[1080px] p-[30px] flex flex-col gap-[30px] border-b-[2px] border-cc-border
`;

const TitleText = tw.h2`text-[30px]`;

type Props = {
  title: string;
};

export default function QusetionInfoComponent(props: Props) {
  return (
    <QusetionInfoContainer>
      <TitleText>{props.title}</TitleText>
      <p>
        {
          'Asked 14 years, 7 months ago Modified 2 years, 8 months ago Viewed 365k times'
        }
      </p>
    </QusetionInfoContainer>
  );
}
