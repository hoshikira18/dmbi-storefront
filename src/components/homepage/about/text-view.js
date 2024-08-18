'use client';
import dynamic from 'next/dynamic';

const FroalaEditorView = dynamic(
    () => import('react-froala-wysiwyg/FroalaEditorView'),
    { ssr: false }
);

const TextViewer = ({ about }) => {
    return <FroalaEditorView model={about} />;
};

export default TextViewer;
