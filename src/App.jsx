import { Outlet } from 'react-router-dom';
import Layout from './layout';
import { useApiSlice } from './hooks/useApiSlice';
import { createContext } from 'react';
export const MusicContext = createContext({ isLoading: false, isError: false, data: [] });

export default function App() {
  const { isError, isLoading, data } = useApiSlice({ endPoint: 'musics', method: 'get' });

  return (
    <MusicContext.Provider value={{ isLoading, isError, data }}>
      <Layout>
        <Outlet />
      </Layout>
    </MusicContext.Provider>
  );
}
