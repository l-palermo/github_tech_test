import React from 'react';
import PropTypes from 'prop-types';

function FavouriteLanguage({ repos, selectLanguage }) {
  const language = function language() {
    if (repos === 'no-user') { return 'No valid user'; }
    if (repos.length === 0) { return 'The user has no repos'; }
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

FavouriteLanguage.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectLanguage: PropTypes.func.isRequired,
};

export default FavouriteLanguage;
