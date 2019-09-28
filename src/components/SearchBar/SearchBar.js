import React from 'react';

function SearchBar(props) {

  const handleChangeName = (event) => {
    props.onHandleChangeName(event)
  };

  const handleFetchRepos = (event) => {
    props.onHandleFetchRepos();
  };
 
  return(
    <label>
      Name:
      <input 
        id='user-name' 
        type='text' 
        value={props.name} 
        placeholder='Insert user name' 
        onChange={handleChangeName} />
      <button 
        id='submit-name' 
        type='submit' 
        onClick={handleFetchRepos}>
        Submit
      </button>
    </label>
  );
};

export default SearchBar;
