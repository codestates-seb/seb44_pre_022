import React from 'react';
import tw from 'twin.macro';
import axios from 'axios';

import GridList from './GridList';
import TagPreview from '../common/grid-list/TagPreview';
import { TagType } from '../../recoil/questionAtom';

export default function TagsListComponent() {
  const [tagList, setTagList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3001/tags')
      .then((response) => {
        console.log(response.data);
        setTagList(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <GridList>
      {[...tagList].reverse().map((tag: TagType) => {
        return <TagPreview name={tag.name}>{tag.content}</TagPreview>;
      })}
    </GridList>
  );
}
