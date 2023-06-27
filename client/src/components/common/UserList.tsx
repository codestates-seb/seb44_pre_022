import React from 'react';
import tw from 'twin.macro';
import axios from 'axios';

import GridList from './GridList';
import UserPreview from '../common/grid-list/UserPreview';
import { UserType } from '../../recoil/questionAtom';

export default function UserListComponent() {
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/users')
      .then((response) => {
        console.log(response.data);
        setUserList(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <GridList>
      {userList
        .slice(1)
        .reverse()
        .map((user: UserType) => {
          return (
            <UserPreview id={user.id} image={user.image}>
              {user.name}
            </UserPreview>
          );
        })}
    </GridList>
  );
}
