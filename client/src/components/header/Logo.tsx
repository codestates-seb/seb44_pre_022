import React from 'react';
import tw from 'twin.macro';

import LogoVector from '../common/LogoVector';

const LogoContainer = tw.button`
w-[330px] h-full
hover:bg-cc-button-header-hover
flex justify-center items-center gap-[5px]
`;

const LogoText = tw.span`
w-[] h-[70%]
text-[36px] tracking-tighter
flex items-end
`;
const LogoTextBold = tw(LogoText)`font-bold tracking-tight`;

type Props = {
  color: string; // Header/Footer → Logo → LogoVector
  isOnlyIcon: boolean;
};

export default function LogoComponent(props: Props) {
  return (
    <LogoContainer>
      <LogoVector color={props.color} />
      {props.isOnlyIcon ? (
        <></>
      ) : (
        <>
          <LogoText>saisai</LogoText>
          <LogoTextBold>overflow</LogoTextBold>
        </>
      )}
    </LogoContainer>
  );
}
