import React from 'react';
import tw from 'twin.macro';

import { Link } from 'react-router-dom';

import Tag from '../Tag';

const UserPreviewContainer = tw.article`
w-[325px] h-[200px]
flex justify-start items-start gap-[15px] overflow-hidden
`;

const ProfileImage = tw.img`w-[90px] h-[90px] bg-cc-red`;

const InformationContainer = tw.section`
flex flex-col
`;

const TextWithLink = tw.a`
text-[20px] pb-[5px] text-cc-text-link hover:text-cc-text-link-hover
`;
const UserCountry = tw.span``;
const UserReputationScore = tw.span`font-bold`;
const TagsContainer = tw.section`
w-full h-full
flex items-center flex-wrap  py-[10px] gap-[10px]
`;

const LinkTW = tw(Link)`shrink-0`;

export default function UserPreviewComponent() {
  return (
    <UserPreviewContainer>
      <LinkTW to='/user'>
        <ProfileImage></ProfileImage>
      </LinkTW>
      <InformationContainer>
        <LinkTW to='/user'>
          <TextWithLink>Waypil</TextWithLink>
        </LinkTW>
        <UserCountry>South Korea</UserCountry>
        <UserReputationScore>123</UserReputationScore>
        <TagsContainer>
          <Tag>html</Tag>
          <Tag>css</Tag>
          <Tag>javascript</Tag>
          <Tag>figma</Tag>
          <Tag>react</Tag>
          <Tag>typescript</Tag>
        </TagsContainer>
      </InformationContainer>
    </UserPreviewContainer>
  );
}
