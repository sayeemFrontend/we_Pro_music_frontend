import PropTypes from 'prop-types';

// import Search from '../search-input/Search';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './LocalSearch.css';
import Input from '../Input/Input';
import { isMatchWith } from '../../utils';
import { MusicContext } from '../../App';

export default function LocalSearch({ contentClass = 'p-2 rounded-sm', displayKey = 'title' }) {
  const { data } = useContext(MusicContext);

  const [tempOptions, updateTempOptions] = useState([]);
  const [listShow, setListShow] = useState(false);
  const divRef = useRef();

  const handleSearchInput = ({ value }) => {
    if (!value) return;
    const tempList = data?.filter((op) => isMatchWith(op[displayKey], value) !== null);
    updateTempOptions(tempList);
    setListShow(true);
  };

  const handleListener = (e) => {
    if (!divRef.current?.contains(e.target)) {
      setListShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleListener);
    return () => window.removeEventListener('click', handleListener);
  }, []);

  return (
    <div ref={divRef} className='relative'>
      <Input onFocus={() => setListShow(false)} onSearch={handleSearchInput} icon={true} className='border rounded-sm h-10 border-primary-700 bg-primary-800 focus-within:bg-primary-700' name='' placeholder='Search by title' />
      <div className='searched-box'>
        <ul className={`shadow-lg text-sm text-primary-700 dark:text-primary-100 bg-primary-300 dark:bg-primary-800 ${contentClass} min-h-[100px] ${listShow ? 'block' : 'hidden'}`}>
          {!tempOptions.length ? (
            <h2 className='pt-10 text-center'>Not Matched</h2>
          ) : (
            tempOptions?.map((op, i) => (
              <li key={i} onClick={() => null} className='list-none hover:opacity-75 w-full cursor-pointer px-2 my-1 py-1'>
                {op[displayKey]}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

LocalSearch.propTypes = {
  apiEndpoint: PropTypes.string,
  contentClass: PropTypes.string,
  className: PropTypes.string,
  displayKey: PropTypes.string,
};
