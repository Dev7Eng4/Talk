import Button from 'components/Global/Button';
import InputArea from 'components/Global/Input/InputArea';
import React from 'react';
import { Channel } from 'service/types/Channel';
import { Post } from 'service/types/Post';

interface Props {
  channel: Channel;
  post: Post;
}

const DetailPost = ({ channel, post }: Props) => {
  return (
    <div className='h-e-header bg-slate-700'>
      <div className='h-main overflow-y-auto px-1 pt-3 bg-slate-700'>
        <div className='flex mb-2 p-2 relative group rounded text-gray-300'>
          {/* <Avatar image={avatar} /> */}
          <div className='ml-2'>
            <div>
              <span className='mr-1.5 font-bold text-red-400'>
                {post.userId}
              </span>
              <span className='text-xs text-gray-400'>{post.createDate}</span>
            </div>

            <div>{post.content}</div>
          </div>
        </div>
      </div>

      <div className='sticky bottom-0 bg-slate-300 p-4'>
        {/* <InputArea placeholder='Write something...' className='rounded' /> */}

        <div className='flex '>
          <Button children='Image' className='w-2/4 mr-4' />
          <Button children='Video' className='w-2/4 ml-4' />
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
