import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { posts } from 'mock/post';
import avatar from 'assets/avatar.jpeg';
import Avatar from 'components/Global/Avatar';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import Input from 'components/Global/Input';
import InputArea from 'components/Global/Input/InputArea';
import Button from 'components/Global/Button';
import { AiTwotoneHeart } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { Post } from 'service/types/Post';
import { FaTimesCircle } from 'react-icons/fa';
import PostItem from 'components/Channel/PostItem';
import { Channel } from 'service/types/Channel';
import Chat from 'components/Message/Chat';

interface Props {
  channel: Channel;
  onActivePost: React.Dispatch<React.SetStateAction<Post | undefined>>;
}

const ChannelPost = ({ channel, onActivePost }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const refContainer = useRef<HTMLDivElement>(null);
  const refInputContainer = useRef<HTMLDivElement>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [value, setValue] = useState('');
  const [mainStyle, setMainStyle] = useState<CSSProperties>({
    height: 'calc(100vh - 187px',
  });
  const [actions] = useState([
    {
      icon: <BiLike />,
      label: 'Like',
      handleClick: (post: Post) => {},
    },
    {
      icon: <FaRegCommentDots />,
      label: 'Comment',
      handleClick: (post: Post) => {
        onActivePost(post);
        setSelectedPost(post);
        // navigate(`${location.pathname}/${post.id}`);
      },
    },
    {
      icon: <BsFillBookmarkPlusFill />,
      label: 'Save',
      handleClick: (post: Post) => {},
    },
  ]);

  useEffect(() => {
    setValue('');
  }, [channel.id, selectedPost?.id]);

  useEffect(() => {
    handleChangeHeight();
  }, [selectedPost]);

  const handleChangeHeight = () => {
    console.log('height', refInputContainer.current?.clientHeight);
    setMainStyle({
      height: `calc(100vh - 72px - ${
        refInputContainer.current?.offsetHeight || 0
      }px)`,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='h-e-header bg-slate-700'>
      <div
        className='overflow-y-auto px-1 pt-5'
        ref={refContainer}
        style={mainStyle}
      >
        {posts.map((post) => (
          <PostItem
            userImage={avatar}
            post={post}
            actions={actions}
            key={post.id}
          />
        ))}
      </div>

      <div className='sticky bottom-0 bg-slate-300' ref={refInputContainer}>
        {/* <div className='p-4'>
          {selectedPost && (
            <span className='flex items-center justify-between mb-2 text-sm'>
              <span>
                Replying to{' '}
                <span className='text-red-600 font-bold'>Rouna</span>
              </span>

              <FaTimesCircle
                className='text-base text-white cursor-pointer'
                onClick={() => setSelectedPost(null)}
              />
            </span>
          )} */}

        <Chat />

        {/* <div className='flex '>
            <Button children='Image' className='w-2/4 mr-4' />
            <Button children='Video' className='w-2/4 ml-4' />
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ChannelPost;
