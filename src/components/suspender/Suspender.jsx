import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useState } from 'react';
import Loader from './Loader';

export default function Suspender({ children, isLoading, isError, onlyFirstRender = false, preRender = true }) {
  const [f_visit, setF_visit] = useState(true);

  useEffect(() => {
    setF_visit(false);
  }, []);

  if (isLoading && (onlyFirstRender ? f_visit : true)) {
    return (
      <>
        <div className='relative'>
          <Loader />
        </div>
        {preRender && children}
      </>
    );
  } else if (!isLoading && isError) {
    return <>{children}</>;
  } else {
    return <>{children}</>;
  }
}

Suspender.propTypes = {
  isLoading: PropTypes.bool,
  isError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onlyFirstRender: PropTypes.bool,
  preRender: PropTypes.bool,

  children: PropTypes.element,
};
