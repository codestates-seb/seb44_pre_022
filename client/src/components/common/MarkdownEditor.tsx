import React from 'react';
import tw from 'twin.macro';
import MDEditor from '@uiw/react-md-editor';

const MDEditorContainer = tw.section`flex flex-col p-[30px]`;

export default function MarkdownEditorComponent() {
  const [value, setValue] = React.useState<string | undefined>(
    '이곳에 글을 작성해주세요.'
  );

  return (
    <MDEditorContainer data-color-mode='light'>
      <MDEditor value={value} onChange={setValue} />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
    </MDEditorContainer>
  );
}
