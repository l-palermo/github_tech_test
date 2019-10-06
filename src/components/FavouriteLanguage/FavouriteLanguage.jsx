import React from 'react';
import PropTypes from 'prop-types';

function FavouriteLanguage({ repos, selectLanguage }) {
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
    const language = function language() {
      const topLanguage = selectLanguage(repos);
      if (topLanguage === undefined) { return 'The user\'s repos have no programming language'; }
      return topLanguage;
    };

    return (
      <div id="favourite-langauge">
        {language()}
      </div>
    );
  }
  return null;
}

FavouriteLanguage.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectLanguage: PropTypes.func.isRequired,
};

export default FavouriteLanguage;
