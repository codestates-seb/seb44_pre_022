import React from 'react';
import tw from 'twin.macro';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState', // 서로 일치해야 함
  default: false,
});
