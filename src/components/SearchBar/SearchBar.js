import React from 'react';

function SearchBar(props) {

  const handleSubmitName = (event) => {
    props.onHandleSubmitName(event)
    event.preventDefault();
  };
 
  return(
    <form onSubmit={handleSubmitName}>
      <label>
        Name:
        <input id='user-name' type='text' value={props.name} placeholder='Insert user name' />
        <input id='submit-name' type='submit' value='Submit' />
      </label>
    </form>
  );
};

export default SearchBar;
