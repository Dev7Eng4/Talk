import React, { useEffect, useRef } from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  channelId: string;
  postId: string;
  onChangeHeight: () => void;
}

const defaultHeight = 39;

const InputArea = (props: Props) => {
  const { channelId, postId, onChangeHeight, className = '', ...rest } = props;

  const refInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (refInput.current) {
      refInput.current.style.height = defaultHeight + 'px';
    }
  }, [channelId, postId]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (refInput.current) {
      refInput.current.style.height = refInput.current.scrollHeight + 'px';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.shiftKey && e.key === 'Enter') {
      setTimeout(() => {
        onChangeHeight();
      }, 100);
    }
    
    if (e.key === 'Enter') {
      
    }
  };

  return (
    <textarea
      ref={refInput}
      rows={1}
      className={`w-full p-2 resize-none focus:outline-none ${className}`}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
};

export default InputArea;
