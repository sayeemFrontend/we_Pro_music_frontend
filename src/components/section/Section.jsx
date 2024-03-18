import PropTypes from 'prop-types';
import Heading from '../heading/Heading';
import Button from '../button';
import Play from '../../assets/logo.svg';

export default function Section({ data = [], onlyRow = false }) {
  return (
    <div className={`flex w-fit gap-4 items-center justify-center md:justify-start ${onlyRow ? 'flex-nowrap ' : 'flex-wrap'}`}>
      {data.map((it, i) => (
        <div key={i} className='h-52 w-44 bg-primary-600 overflow-hidden relative'>
          <img className='w-auto !h-full absolute top-0 left-0' src={it.image} alt='' />
          <div className='group bg-primary-700 p-3 w-full h-full absolute top-0 left-0 bg-opacity-30 hover:bg-opacity-60 rounded-sm transition-all duration-500 ease-out'>
            <Heading size='md' className='opacity-90' title={it.title} />
            <Heading size='sm' className='opacity-60' title={it.artist} />
            <Heading size='xs' className='absolute right-6 bottom-6' title={it.year} />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <Button>
                <img className='w-[0px] group-hover:w-[40px] transition-all duration-400 ease-out' src={Play} alt='paly' />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
Section.propTypes = {
  view: PropTypes.element,
  data: PropTypes.array,
  onlyRow: PropTypes.bool,
};
