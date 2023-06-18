import React from 'react';
import tw from 'twin.macro';

const ButtonContainer = tw.button`
h-[60px] px-[20px] flex flex-row justify-center items-center
`;

const SortButtonContainer = tw(ButtonContainer)`
bg-white border-r-[1px] border-cc-border
hover:bg-cc-button-white-hover active:bg-cc-button-white-click
`;

const BlueButtonContainer = tw(ButtonContainer)`
rounded-[5px] bg-cc-button-blue border-[2px] border-cc-button-blue-border
hover:bg-cc-button-blue-hover active:bg-cc-button-blue-click
`;

const SkyButtonContainer = tw(ButtonContainer)`
rounded-[5px] bg-cc-button-sky border-[2px] border-cc-button-sky-border
hover:bg-cc-button-sky-hover active:bg-cc-button-sky-click
`;

const WhiteButtonContainer = tw(ButtonContainer)`
rounded-[5px] bg-cc-button-white border-[2px] border-cc-button-white-border
hover:bg-cc-button-white-hover active:bg-cc-button-white-click
`;

const ButtonTypes: { [key: string]: typeof ButtonContainer } = {
  sort: SortButtonContainer,
  blue: BlueButtonContainer,
  sky: SkyButtonContainer,
  white: WhiteButtonContainer,
};

const TextOrigin = tw.p`text-[20px]`;
const TextInSortButton = tw(TextOrigin)`text-cc-button-white-text`;
const TextInBlueButton = tw(TextOrigin)`text-cc-button-blue-text`;
const TextInSkyButton = tw(TextOrigin)`text-cc-button-sky-text`;
const TextInWhiteButton = tw(TextOrigin)`text-cc-button-white-text`;

const TextTypes: { [key: string]: typeof TextOrigin } = {
  sort: TextInSortButton,
  blue: TextInBlueButton,
  sky: TextInSkyButton,
  white: TextInWhiteButton,
};

type Props = {
  type: string; // sort, blue, sky, white
  children: string;
};

export default function ButtonComponent(props: Props) {
  const Button = ButtonTypes[props.type];
  const Text = TextTypes[props.type];

  return (
    <Button>
      <Text>{props.children}</Text>
    </Button>
  );
}
