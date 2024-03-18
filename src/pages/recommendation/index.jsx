import { useContext, useEffect } from 'react';
import Container from '../../components/container/Container';
import Section from '../../components/section/Section';
import Suspender from '../../components/suspender/Suspender';
import Heading from '../../components/heading/Heading';
import NoData from '../../components/no-data/NoData';
import { scrollTo } from '../../utils';
import { MusicContext } from '../../App';

export default function Recommendation() {
  const { isError, isLoading, data } = useContext(MusicContext);
  const recommendation = data?.filter((it) => it.ratings?.fb > 100);

  useEffect(() => {
    scrollTo();
  }, []);

  return (
    <section>
      <Container className='mt-10 mb-16'>
        <Heading size='md' className='opacity-70' title='You may listen, followings are generated musics top your most people listen ' />
      </Container>
      <Container>
        <Suspender isError={isError} isLoading={isLoading}>
          <div>
            <Section data={recommendation} />
            {!isLoading && recommendation.length == 0 && <NoData />}
          </div>
        </Suspender>
      </Container>
    </section>
  );
}
