import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getChannels, getFriends } from 'service/request';
import { Channel } from 'service/types/Channel';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import { users } from '../../mock/user';
import { listChannels } from 'mock/channels';
import ChannelPost from '../post/ChannelPost';
import DetailPost from 'pages/post/DetailPost';
import { Post } from 'service/types/Post';
import NotPageFound from 'pages/NotPageFound';

const defaultChannels: Channel[] = [];

for (let i = 0; i < 3; i++) {
  defaultChannels.push({
    id: '',
    name: '',
    logo: '',
  });
}

const Home = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [channels, setChannels] = useState<Channel[]>(defaultChannels);
  const [activeChannel, setActiveChannel] = useState<Channel>();
  const [activePost, setActivePost] = useState<Post>();

  useEffect(() => {
    handleGetChannels();
    handleGetFriends();
  }, []);

  const handleGetChannels = async () => {
    try {
      const res = await getChannels();
      console.log('res', res);
      setChannels(res);
    } catch (err) {
      setChannels(listChannels);
      console.log('error', err);
    }
  };

  const handleGetFriends = async () => {
    try {
      const res = await getFriends();
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <div className='flex relative'>
      <Navbar
        channels={channels}
        open={openNavbar}
        active={activeChannel}
        onToggle={setOpenNavbar}
        onActive={setActiveChannel}
      />
      <div className='grow'>
        <Header onToggleNavbar={setOpenNavbar} channel={activeChannel} />
        <main className='flex'>
          <div className='grow'>
            <Routes>
              <Route
                path='/:channelId'
                element={
                  activeChannel ? (
                    <ChannelPost
                      channel={activeChannel}
                      onActivePost={setActivePost}
                    />
                  ) : (
                    <NotPageFound />
                  )
                }
              />
              <Route
                path='/:channelId/:postId'
                element={
                  activeChannel && activePost ? (
                    <DetailPost channel={activeChannel} post={activePost} />
                  ) : (
                    <NotPageFound />
                  )
                }
              />
            </Routes>
          </div>
          <SideBar users={users} isActiveChannel={!!activeChannel} />
        </main>
      </div>
    </div>
  );
};

export default Home;
