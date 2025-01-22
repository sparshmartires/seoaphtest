import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { setContent } from '../redux/editorSlice';

const Editor = {
  modules: {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['code-block'],
      ['clean'],
    ],
    history: {
      delay: 1000,
      userOnly: true, // Undo and redo only for user actions
    },
    clipboard: {
      matchVisual: false,
    },
  },
  formats: [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'indent',
    'link',
    'image',
    'video',
    'code-block',
  ],
};

const RichTextEditor = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.editor.content);
  const quillRef = React.useRef(null);


  const handleUndo = () => {
    const editor = quillRef.current.getEditor();
    editor.history.undo();
  };

  const handleRedo = () => {
    const editor = quillRef.current.getEditor();
    editor.history.redo();
  };
  
  const handleContentChange = (value) => {
    dispatch(setContent(value));
  };

  const saveContent = async () => {};

  const loadContent = async () => {};

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        theme="snow"
        modules={Editor.modules}
        ref={quillRef}
        formats={Editor.formats}
        bounds={'.app'}
      />
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <button onClick={saveContent}>Save</button>
      <button onClick={loadContent}>Load</button>
    </div>
  );
};

export default RichTextEditor;
