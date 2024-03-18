import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/Heading';

export default function PopUp({ header: Header, positionClass = 'top-0 right-0', clickOnOption = () => null, options = [], itemClass = '', children: Body = null }) {
  const [show, setShow] = useState(false);
  const [, setSelOption] = useState(options[0]);

  const headerRef = useRef();
  const bodyRef = useRef();

  const handleClick = (item) => {
    setSelOption(item);
    if (clickOnOption) {
      clickOnOption(item);
    }
    setShow(false);
  };

  const eventCall = (e) => {
    if (headerRef.current && bodyRef.current && !headerRef.current.contains(e.target) && !bodyRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', eventCall);
    return () => window.removeEventListener('click', eventCall);
  }, []);

  return (
    <div className='popup w-max'>
      <div className='relative '>
        <div ref={headerRef} onClick={() => setShow(!show)}>
          {Header ? Header : <Heading title='Title' />}
        </div>
        <div ref={bodyRef} className={`body h-fit bg-primary-800 rounded-sm absolute shadow-xl z-10 ${positionClass} ${show ? 'block' : 'hidden'}`}>
          {Body ? (
            Body
          ) : (
            <ul className={`leading-8 w-40 b list-none p-4 text-start  `}>
              {options?.map((it, i) => (
                <li onClick={() => handleClick(it)} className={`cursor-pointer ${itemClass && itemClass}`} key={i}>
                  {it.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  children: PropTypes.element,
  positionClass: PropTypes.string,
  itemClass: PropTypes.string,
  header: PropTypes.element,
  clickOnOption: PropTypes.func,
  options: PropTypes.array,
};
