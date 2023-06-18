import React from 'react';
import tw from 'twin.macro';

const SearchBarContainerOrigin = tw.div`h-[60px]`;
const SearchBarLargeContainer = tw(SearchBarContainerOrigin)`w-[790px]`;
const SearchBarShortContainer = tw(SearchBarContainerOrigin)`w-[300px]`;

const SearchBarContainerTypes: {
  [key: string]: typeof SearchBarContainerOrigin;
} = {
  large: SearchBarLargeContainer,
  short: SearchBarShortContainer,
};

const SearchBar = tw.input`
w-full h-full
p-[15px] gap-[10px] border-[2px] border-gray-300 rounded-[10px]
flex flex-row items-start
`;

type Props = {
  type: string; // large, short
};

export default function SearchBarComponent(props: Props) {
  const SearchBarContainer = SearchBarContainerTypes[props.type];
  return (
    <SearchBarContainer>
      <SearchBar type='text' />
    </SearchBarContainer>
  );
}
