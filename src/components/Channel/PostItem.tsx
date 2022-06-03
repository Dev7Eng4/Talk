import Avatar from 'components/Global/Avatar';
import React from 'react';
import { Post } from 'service/types/Post';

interface Props {
  userImage: string;
  post: Post;
  actions: any;
}

const PostItem = ({ userImage, post, actions }: Props) => {
  return (
    <div className='flex mb-2 p-2 relative group rounded text-gray-300 hover:bg-gray-600'>
      <Avatar image={userImage} />

      <div className='ml-2'>
        <div>
          <span className='mr-1.5 font-bold text-red-400'>{post.userName}</span>
          <span className='text-xs text-gray-400'>{post.createDate}</span>
        </div>

        <div>{post.content}</div>

        {/* <div className='flex justify-between items-center'>
                <span className='flex items-center'>
                  <BiLike />5
                </span>
                <span>1k replies</span>
              </div> */}

        {/* <div className='flex relative'>
                {actions.map((action) => (
                  <span
                    key={action.label}
                    className='flex items-center mx-2 cursor-pointer hover:text-red-300'
                  >
                    {action.icon}
                    {action.label}
                   
                  </span>
                ))}
              </div> */}

        {/* <InputArea className='rounded-full px-4 text-black' /> */}
        {/* <div className='flex items-center justify-around my-2'>
                {actions.map((action) => (
                  <span
                    key={action.label}
                    className='flex items-center mx-2 cursor-pointer'
                  >
                    {action.icon}
                    {action.label}
                  </span>
                ))}
              </div> */}
      </div>

      <div className='hidden items-center py-1 px-0.5 absolute top-0 right-0 -translate-y-2/4 bg-zinc-600 rounded group-hover:flex'>
        {actions.map((action: any) => (
          <span
            key={action.label}
            className='flex items-center mx-2 cursor-pointer'
            onClick={() => action.handleClick(post)}
          >
            <span className='mr-0.5'>{action.icon}</span>

            {action.label}
          </span>
        ))}
      </div>
    </div>
  );
  return <div>PostItem</div>;
};

export default PostItem;
