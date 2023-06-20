import React from 'react';
import tw from 'twin.macro';

import { Link } from 'react-router-dom';

const ProfilePreviewBoxContainer = tw.section`
w-[300px] h-[70px] bg-cc-tag
flex items-center p-[10px] gap-[10px]
`;

const ProfileImage = tw.img`w-[50px] h-[50px] bg-cc-red`;

const ProfileData = tw.section`flex flex-col`;
const TextWithLink = tw.a`text-cc-text-link hover:text-cc-text-link-hover`;
const UploadDate = tw.span`text-cc-text-ui`;

export default function ProfilePreviewBoxComponent() {
  return (
    <ProfilePreviewBoxContainer>
      <Link to='../../user/0'>
        <ProfileImage />
      </Link>
      <ProfileData>
        <Link to='../../user/0'>
          <TextWithLink>Waypil</TextWithLink> {/* UserName */}
        </Link>
        <UploadDate>asked Oct 23, 2008 at 15:16</UploadDate>
      </ProfileData>
    </ProfilePreviewBoxContainer>
  );
}
