import React from 'react';
import tw from 'twin.macro';

import Button from '../../common/Button';

const SortButtonsContainer = tw.section`flex rounded-[5px] border-[2px] border-cc-border`;

const ButtonSet: { [key: string]: string[] } = {
  Home: ['Hot', 'Week', 'Month'],
  Questions: ['New', 'Active', 'Unanswered'],
  Tags: ['New', 'Popluar', 'Name'],
  Users: ['New', 'Week', 'Month'],
  Tag: ['Hot', 'Reputation'],
  Search: ['New', 'Relevance'],
};

type Props = {
  pageName: string;
};

const SortButtonsComponent = (props: Props) => {
  const pageName = props.pageName.split('/')[0];
  return (
    <SortButtonsContainer>
      {ButtonSet[pageName].map((buttonName) => {
        return <Button type='sort'>{buttonName}</Button>;
      })}
    </SortButtonsContainer>
  );
};
export default SortButtonsComponent;
