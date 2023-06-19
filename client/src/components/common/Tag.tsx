import React from 'react';
import tw from 'twin.macro';

import { Link } from 'react-router-dom';

const TagContainer = tw.a`bg-cc-tag hover:bg-cc-tag-hover rounded-[5px] px-[6px] py-[1px]`;
const Text = tw.span`text-cc-tag-text whitespace-nowrap`;

type Props = {
  children: string;
};

export default function TagComponent(props: Props) {
  return (
    <Link to={`/questions/tagged/${props.children}`}>
      <TagContainer href='#'>
        <Text>{props.children}</Text>
      </TagContainer>
    </Link>
  );
}
