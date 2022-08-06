import React,{useState} from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);


  const formatCount = counter === 0 ? 'empty': counter;

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += counter === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  }
  const handleDecrement = () => {
    setCounter(counter - 1);
  }
  const handleTagChange = (deleteTag) => {
    console.log(deleteTag);
    setTags((prevState) => {
      return prevState.filter(tag => tag !== deleteTag)
    })
  }

  const renderTags = () => {
    if (tags.length === 0) return 'no Tags'
    return tags.map(tag =>
      (<li
        className='btn btn-primary btn-sm m-2'
        onClick={() => handleTagChange(tag)}
        key={tag}
      >{tag}</li>))
  }

  return (
    <>
      <ul>
        {renderTags()}
      </ul>
      <span className={getBageClasses()}>{formatCount}</span>
      <button
        className='btn btn-primary btn-sm m-2'
        onClick={handleIncrement}
      >+</button>
      <button
        className='btn btn-primary btn-sm m-2'
        onClick={handleDecrement}
      >-</button>
    </>);
}

export default Counter;
