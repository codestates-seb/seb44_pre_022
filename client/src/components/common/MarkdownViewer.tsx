import MDEditor from '@uiw/react-md-editor';

type Props = {
  children?: string;
};

export default function MarkdownEditorComponent(props: Props) {
  return (
    <div data-color-mode='light'>
      <MDEditor.Markdown
        source={props.children}
        style={{ whiteSpace: 'pre-wrap' }}
      />
    </div>
  );
}
