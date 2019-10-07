import React from 'react';
import PropTypes from 'prop-types';
import FavouriteLanguage from '../FavouriteLanguage/FavouriteLanguage';
import selectLanguage from '../../modules/selectLanguage/selectLanguage';

function FilterDataForLanguage({ repos }) {
  if (repos.length === 0) {
    return (
      <div id="favourite-langauge">
        The user has no repos
      </div>
    );
  }

  if (repos[0].user === 'no-user') {
    return (
      <div id="favourite-langauge">
        No valid user
      </div>
    );
  }

  if (repos[0].id !== undefined) {
    return (
      <div id="favourite-langauge">
        <FavouriteLanguage
          repos={repos}
          selectLanguage={selectLanguage}
        />
      </div>
    );
  }
  return null;
}

FilterDataForLanguage.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilterDataForLanguage;
