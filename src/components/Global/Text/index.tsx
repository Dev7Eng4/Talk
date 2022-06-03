import React from 'react';

interface Props {
  content: React.ReactNode;
}

const Text = ({ content }: Props) => {
  return <span className='inline-block pt-px'>{content}</span>;
};

export default Text;
