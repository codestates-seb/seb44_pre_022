import React, { ReactNode } from 'react';
import tw from 'twin.macro';

import TagPreview from './grid-list/TagPreview';
import UserPreview from './grid-list/UserPreview';

const GridListContainer = tw.div`
w-[1080px] p-[30px] gap-[22px]
flex flex-wrap items-center
`;

type Props = {
  children: ReactNode;
};

export default function GridListComponent(props: Props) {
  return <GridListContainer>{props.children}</GridListContainer>;
}
