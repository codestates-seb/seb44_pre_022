import React from 'react';
import tw from 'twin.macro';

const Button = tw.button`
w-full h-[60px]
border-r-[5px] border-cc-orange
hover:bg-cc-button-header-hover
`;

type Props = {
  children: string;
  isCurrentPage?: boolean;
};

export default function AsideButtonComponent(props: Props) {
  return (
    <Button>
      <span>{props.children}</span>
    </Button>
  );
}
