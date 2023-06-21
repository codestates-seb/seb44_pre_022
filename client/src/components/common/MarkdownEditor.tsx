import React from 'react';
import tw from 'twin.macro';
import MDEditor from '@uiw/react-md-editor';

const MDEditorContainer = tw.section`flex flex-col`;

export default function MarkdownEditorComponent() {
  const [markdownText, setMarkdownText] = React.useState<string | undefined>(
    '이곳에 글을 작성해주세요.'
  );

  return (
    <MDEditorContainer data-color-mode='light'>
      <MDEditor value={markdownText} onChange={setMarkdownText} />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
    </MDEditorContainer>
  );
}
