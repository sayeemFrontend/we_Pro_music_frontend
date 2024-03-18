import Button from '../../components/button';
import Heading from '../../components/heading/Heading';
import PlayIcon from '../../assets/play.svg?react';
import FBIcon from '../../assets/facebook.svg?react';
import WhatIcon from '../../assets/whatsapp.svg?react';
import TelIcon from '../../assets/telegram.svg?react';
import MegIcon from '../../assets/messenger.svg?react';
import RedditIcon from '../../assets/reddit.svg?react';

const music = {
  title: 'Music Session',
  artist: 'Taylor Swift, Kanye West, Bruno Mars',
  album: 'Dangerous Woman, Starboy',
  genre: 'Pop, Rap, Rock, R&B/Sou ',
  duration: '10',
  year: '2022-2024',
  ratings: {
    fb: 200,
    reddit: 100,
    share: '4k',
    tel: 400,
    whatsapp: 45,
    msgr: 400,
  },
  image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/Headphones-primary%20tout-mobile-1534x1083?$toutMobile$&fmt=png-alpha',
  descriptions:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
};

export default function HeroSection() {
  const { ratings } = music;
  return (
    <div>
      <div className='h-[500px]  w-full overflow-hidden relative'>
        <img width='100%' className='!h-full' src={music.image} alt='banner' />
        <div className='absolute  top-0 right-4 md:right-16 h-[500px] md:w-96 p-10 bg-primary-800 bg-opacity-50'>
          <Heading size='xl' className='text-secondary-600 mb-4' title={music.title} />
          <Heading size='sm' className='mb-4 opacity-80' title={music.descriptions} />
          <div className='p-4 mb-8 text-sm opacity-90 bg-primary-800 bg-opacity-90 rounded-md'>
            <p>
              <span className='opacity-85 mr-2'>Artist:</span>
              {music.artist}
            </p>
            <p>
              <span className='opacity-85 mr-2'>Album:</span>
              {music.album}
            </p>
            <p>
              <span className='opacity-85 mr-2'>Duration:</span>
              {music.duration}
            </p>
            <p>
              <span className='opacity-85 mr-2'>Released:</span>
              {music.year}
            </p>
          </div>
          <div>
            <Button className='h-10 rounded-md w-max px-2 bg-secondary-500'>
              <div className='flex items-center gap-3'>
                <PlayIcon width='36px' height='auto' />
                <Heading size='lg' title='Play' className='mr-2' />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className=' bg-primary-800 p-4 w-full opacity-40 overflow-auto'>
        <div className='w-max mx-auto flex items-center gap-4'>
          {ratings.share && (
            <p>
              {ratings.share}
              <br />
              Shares
            </p>
          )}
          {ratings.fb && (
            <ul className='flex items-center w-36 py-2 justify-evenly border border-primary-600 rounded-sm'>
              <FBIcon width='24px' height='auto' fill='white' />
              <li>{ratings.fb}</li>
            </ul>
          )}
          {ratings.msgr && (
            <ul className='flex items-center w-36 py-2 justify-evenly border border-primary-600 rounded-sm'>
              <MegIcon width='24px' height='auto' fill='white' />
              <li>{ratings.msgr}</li>
            </ul>
          )}
          {ratings.whatsapp && (
            <ul className='flex items-center w-36 py-2 justify-evenly border border-primary-600 rounded-sm'>
              <WhatIcon width='24px' height='auto' fill='white' />
              <li>{ratings.whatsapp}</li>
            </ul>
          )}
          {ratings.tel && (
            <ul className='flex items-center w-36 py-2 justify-evenly border border-primary-600 rounded-sm'>
              <TelIcon width='24px' height='auto' fill='white' />
              <li>{ratings.te}</li>
            </ul>
          )}
          {ratings.reddit && (
            <ul className='flex items-center w-36 py-2 justify-evenly border border-primary-600 rounded-sm'>
              <RedditIcon width='24px' height='auto' fill='white' />
              <li>{ratings.reddit}</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
