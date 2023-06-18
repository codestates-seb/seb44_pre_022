import React from 'react';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBarContainerOrigin = tw.section`h-[60px]`;
const SearchBarLargeContainer = tw(SearchBarContainerOrigin)`w-[790px]`;
const SearchBarShortContainer = tw(SearchBarContainerOrigin)`w-[300px]`;

const SearchBarContainerTypes: {
  [key: string]: typeof SearchBarContainerOrigin;
} = {
  large: SearchBarLargeContainer,
  short: SearchBarShortContainer,
};

const SearchBar = tw.form`
w-full h-full
px-[15px] py-[10px] gap-[10px] border-[2px] border-gray-300 rounded-[10px]
flex justify-center items-center
`;

const SearchIcon = tw(FontAwesomeIcon)`
text-cc-icon-search text-[24px]
`;
const SearchBarInput = tw.input`w-full h-full`;

type Props = {
  type: string; // large, short
};

export default function SearchBarComponent(props: Props) {
  const SearchBarContainer = SearchBarContainerTypes[props.type];
  return (
    <SearchBarContainer>
      <SearchBar>
        <SearchIcon icon={faMagnifyingGlass} />
        <SearchBarInput type='text' />
      </SearchBar>
    </SearchBarContainer>
  );
}
