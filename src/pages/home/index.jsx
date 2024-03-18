import { useContext, useEffect } from 'react';
import Container from '../../components/container/Container';
import Section from '../../components/section/Section';
import HeroSection from './HeroSection';
import Suspender from '../../components/suspender/Suspender';
import SectionHeader from '../../components/section/SectionHeader';
import { useNavigate } from 'react-router-dom';
import { scrollTo } from '../../utils';
import { MusicContext } from '../../App';

export default function Home() {
  const { isError, isLoading, data } = useContext(MusicContext);
  const trending = data?.filter((it) => it.type === 'trending');
  const recommendations = data?.filter((it) => it.ratings?.fb > 100);

  const navigate = useNavigate();

  useEffect(() => {
    scrollTo();
  }, []);

  return (
    <Suspender isError={isError} isLoading={isLoading}>
      <>
        <HeroSection />
        <Container>
          <div className='text-sm opacity-80 mt-10 mb-16'>
            <span>Are you looking for the best website to stream online music the Internet can offer? If yes, search no more, you have found it here.</span>
            <p className='mt-5'>
              In essence, music is more than just sound; it is a reflection of our humanity, a testament to our creativity, and a bridge that connects us all. Whether experienced alone or shared with others, music has the power to move us, inspire
              us, and remind us of our common humanity. In today interconnected world, technology has revolutionized the way we create, consume, and share music. Digital platforms and streaming services provide access to an endless catalog of songs
              from around the globe, enabling artists to reach audiences like never before. Yet, amidst this technological advancement, the essence of music remains unchanged – it continues to inspire, unite, and enrich the lives of people everywhere
            </p>
          </div>
        </Container>

        <section className='mb-24'>
          <Container>
            <SectionHeader onClick={() => navigate('recommendation')} label='Recommendations' />
          </Container>
          <Container className='custom-scroll'>
            <Section onlyRow={true} data={recommendations} />
          </Container>
        </section>
        <section>
          <Container>
            <SectionHeader onClick={() => navigate('trending')} label='Trending' />
          </Container>
          <Container className='custom-scroll'>
            <Section onlyRow={true} data={trending} />
          </Container>
        </section>
      </>
    </Suspender>
  );
}
