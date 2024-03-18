import PropTypes from 'prop-types';
import Button from '../button';
import Heading from '../heading/Heading';
import RightA from '../../assets/chevronR.svg?react';

export default function SectionHeader({ label, onClick = () => {} }) {
  return (
    <ul className='mb-10 flex justify-between items-center'>
      <Button className='h-10 rounded-sm w-max px-2 bg-secondary-600'>
        <div className='flex items-center gap-3'>
          <Heading size='md' title={label} className='mr-2' />
          <RightA width='28px' height='auto' />
        </div>
      </Button>
      <Button onClick={onClick} className='h-10 px-2 rounded-sm border border-primary-600  hover:text-secondary-600' title='See more...' />
    </ul>
  );
}
SectionHeader.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
