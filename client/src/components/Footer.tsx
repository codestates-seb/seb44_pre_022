import React from 'react';
import tw from 'twin.macro';

import { Link } from 'react-router-dom';

import LogoVector from './common/LogoVector';

const FooterContainer = tw.footer`
w-full bg-cc-footer p-[20px] gap-[20px]
flex justify-center items-start
`;

const Column = tw.section`flex flex-col`;
const ColumnLast = tw(Column)`
h-[250px] justify-between items-start p-[20px]
`;
const Row = tw.section`
flex gap-[20px]
`;

const Text = tw.span`
text-[16px] text-white
`;
const TextWithLink = tw.a`
text-[16px] text-white
`;
const TextColumnTitle = tw(Text)`
text-[24px] font-bold py-[10px] pr-[50px]
`;
const TextCopyright = tw.span`
text-[12px] text-white
`;

export default function FooterComponent() {
  return (
    <FooterContainer>
      <Link to='/'>
        <LogoVector color={'white'} />
      </Link>
      <Column>
        <TextColumnTitle>SAISAI OVERFLOW</TextColumnTitle>
      </Column>
      <Column>
        <TextColumnTitle>STAFF</TextColumnTitle>
        <Text>조혜란</Text>
        <Text>오현석</Text>
        <Text>김다미</Text>
        <Text>배정빈</Text>
        <Text>서재곤</Text>
        <Text>이승환</Text>
      </Column>
      <Column>
        <TextColumnTitle>BACK-END</TextColumnTitle>
        <Text>조혜란 (팀장)</Text>
        <Text>서재곤</Text>
        <Text>이승환</Text>
      </Column>
      <Column>
        <TextColumnTitle>FRONT-END</TextColumnTitle>
        <Text>오현석 (부팀장)</Text>
        <Text>김다미</Text>
        <Text>배정빈</Text>
      </Column>
      <ColumnLast>
        <Row>
          <TextWithLink
            href={'https://github.com/codestates-seb/seb44_pre_022/'}
            target={'_blank'}
          >
            GitHub
          </TextWithLink>
          <TextWithLink
            href={
              'https://waypil.atlassian.net/jira/software/projects/SAISAI/boards/6'
            }
            target={'_blank'}
          >
            Jira
          </TextWithLink>
          <TextWithLink
            href={
              'https://www.notion.so/codestates/5c23d985c11e4a3fa275a9632bf5171c?pvs=4'
            }
            target={'_blank'}
          >
            Notion
          </TextWithLink>
          <TextWithLink href={'https://www.codestates.com/'} target={'_blank'}>
            CodeStates
          </TextWithLink>
          <TextWithLink href={'https://stackoverflow.com/'} target={'_blank'}>
            Stack Overflow
          </TextWithLink>
        </Row>
        <Row>
          <TextCopyright>
            Copyright © 2023 SAISAI Team. All rights reserved.
            <br />
            The logo and design motif are based on Stack Overflow website.
          </TextCopyright>
        </Row>
      </ColumnLast>
    </FooterContainer>
  );
}
