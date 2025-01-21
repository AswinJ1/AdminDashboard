import React from 'react';
import LeftMain from './LeftMain';
import RightMain from './RightMain';

const Main = () => {
  return (
    <div className="m-0 pt-[80px] pl-[96px] pr-[24px] bg-black grid gap-1 grid-cols-1 lg:grid-cols-[34%_66%] sm:grid-cols-1 w-fit">
    <div>
      <LeftMain />
    </div>
    <div>
      <RightMain />
    </div>
  </div>
  

  );
};

export default Main;
