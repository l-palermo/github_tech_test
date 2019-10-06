import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onHandleFetchRepos }) {
  const [name, setName] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleFetchRepos = () => {
    onHandleFetchRepos(name);
  };

  return (
    <div>
      <label htmlFor="user-name">
        Name:
        <input
          id="user-name"
          type="text"
          value={name}
          placeholder="Insert user name"
          onChange={handleChangeName}
        />
      </label>
      <button
        id="submit-name"
        type="submit"
        onClick={handleFetchRepos}
      >
        Submit
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  onHandleFetchRepos: PropTypes.func.isRequired,
};

export default SearchBar;
