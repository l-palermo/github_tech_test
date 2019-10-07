import React from 'react';
import PropTypes from 'prop-types';

function FavouriteLanguage({ repos, selectLanguage }) {
  const topLanguage = selectLanguage(repos);

  if (topLanguage === undefined) {
    return (
      <div id="favourite-langauge">
        The user&apos;s repos have no programming language
      </div>
    );
  }

  return (
    <div id="favourite-langauge">
      {topLanguage}
    </div>
  );
}

FavouriteLanguage.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectLanguage: PropTypes.func.isRequired,
};

export default FavouriteLanguage;
