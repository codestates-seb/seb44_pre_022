import React from 'react';
import tw from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGlobe } from '@fortawesome/free-solid-svg-icons';

const ButtonOrigin = tw.button`
w-full h-[60px] border-r-[5px] border-cc-orange hover:bg-cc-button-header-hover
flex justify-start items-center
`;
const ButtonActive = tw(ButtonOrigin)`bg-cc-button-header-hover`;

const IconContainer = tw.section`
w-[60px] flex justify-center items-center
`;

const IconOrigin = tw(FontAwesomeIcon)`text-[24px] text-cc-button-aside-text`;
const TextOrigin = tw.span`text-[24px] text-cc-button-aside-text`;
const IconActive = tw(IconOrigin)`text-cc-button-aside-text-active`;
const TextActive = tw(TextOrigin)`font-bold text-cc-button-aside-text-active`;

const IconTypes: { [key: string]: typeof faHouse } = {
  Home: faHouse,
  Questions: faGlobe,
};

type Props = {
  children: string;
  isActive?: boolean;
};

export default function AsideButtonComponent(props: Props) {
  const Button = props.isActive ? ButtonActive : ButtonOrigin;
  const Icon = props.isActive ? IconActive : IconOrigin;
  const Text = props.isActive ? TextActive : TextOrigin;

  return (
    <Button>
      <IconContainer>
        <Icon icon={IconTypes[props.children]}></Icon>
      </IconContainer>
      <Text>{props.children}</Text>
    </Button>
  );
}
