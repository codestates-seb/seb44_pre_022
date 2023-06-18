import React from 'react';
import tw from 'twin.macro';

const SearchBarContainer = tw.div`
w-[790px] h-[60px]
`;
const SearchBar = tw.input`
w-full h-full
p-[15px] gap-[10px] border-[2px] border-gray-300 rounded-[10px]
flex flex-row items-start
`;

export default function SearchBarComponent() {
  return (
    <SearchBarContainer>
      <SearchBar type='text' />
    </SearchBarContainer>
  );
}
