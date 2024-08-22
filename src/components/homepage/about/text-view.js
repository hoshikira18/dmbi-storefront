'use client';
import dynamic from 'next/dynamic';

const FroalaEditorView = dynamic(
    () => import('react-froala-wysiwyg/FroalaEditorView'),
    { ssr: false }
);

const TextViewer = ({ content }) => {
    return <FroalaEditorView model={content} />;
};

export default TextViewer;
