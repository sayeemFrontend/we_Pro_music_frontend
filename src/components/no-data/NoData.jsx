import Icon  from './noDataIcon.svg?react';

export default function NoData() {
  return (
    <div className='my-10 mx-auto flex items-center flex-col'>
      <Icon className='w-10 ' />
      <p className='text-base'>No Data Found</p>
    </div>
  );
}
