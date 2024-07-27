import React, { useState } from 'react';

const Selection = () => {
  const [stnName, setstnName] = useState('');

  const onchangestnName = (e) => {
    setstnName(e.target.value);
  };

  return (
    <>
      <div className="selection-card bg-yellow-400">
        hello world
      </div>
      <div className='m-10'>
        <input 
          placeholder='Enter the station name' 
          className='bg-white relative pl-1 p-10' 
          onChange={onchangestnName}
        />
      </div>
    </>
  );
}

export default Selection;
