import React from 'react';

const Counter = () => {
  let count = 2;
  const formatCount = count === 0 ? 'empty': count;

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    count += 1;
  }

  return (
    <>
      <span className={getBageClasses()}>{formatCount}</span>
      <button className='btn btn-primary btn-sm m-2' onClick={handleIncrement}>+</button>
    </>);
}

export default Counter;
