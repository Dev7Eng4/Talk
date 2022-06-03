import React, { useRef, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaSmile } from 'react-icons/fa';
import Picker, { IEmojiData } from 'emoji-picker-react';

import { useClickOutSide } from 'hooks';
import InputArea from 'components/Global/Input/InputArea';

const Chat = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<IEmojiData>();
  const [openEmoji, setOpenEmoji] = useState(false);
  const [message, setMessage] = useState('');
  const emojiRef = useRef<HTMLDivElement>(null);
  const emojiButtonRef = useRef<HTMLDivElement>(null);

  useClickOutSide(
    emojiRef,
    () => {
      setOpenEmoji(false);
    },
    emojiButtonRef
  );

  const handleSelectEmoji = (e: React.MouseEvent, data: IEmojiData) => {
    setSelectedEmoji(data);
    setMessage((prev) => `${prev}${data.emoji}`);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleChangeHeight = () => {
    // console.log('height', refInputContainer.current?.clientHeight);
    // setMainStyle({
    //   height: `calc(100vh - 72px - ${
    //     refInputContainer.current?.offsetHeight || 0
    //   }px)`,
    // });
  };

  const handleChange = () => {};

  return (
    <div className='p-2 relative shadow'>
      {openEmoji && (
        <div className='absolute bottom-14 right-10 z-50' ref={emojiRef}>
          <Picker disableSearchBar={true} onEmojiClick={handleSelectEmoji} />
        </div>
      )}

      <div>
        {/* <AiFillPlusCircle className='absolute top-2/4 left-4 -translate-y-2/4 text-xl text-red-300 cursor-pointer text-gray-400 hover:text-gray-600' /> */}

        <InputArea
          channelId={'a'}
          postId={''}
          onChangeHeight={handleChangeHeight}
          placeholder='Write something...'
          className='rounded px-9'
          onChange={handleChange}
          value={message}
        />
        {/* <input
        type='text'
        className='w-full p-2 pr-9 pl-8 rounded focus:outline-none'
        value={message}
        onChange={handleMessageChange}
      /> */}

        {/* <div
          className='absolute top-2/4 right-4 -translate-y-2/4 z-10'
          ref={emojiButtonRef}
        >
          <FaSmile
            className='text-xl cursor-pointer text-gray-400 hover:text-primary'
            onClick={(e: React.MouseEvent) => {
              console.log('a');
              e.stopPropagation();
              setOpenEmoji((prev) => !prev);
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Chat;
