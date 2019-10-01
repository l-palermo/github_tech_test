import React from 'react';

function FavouriteLanguage(props) {
  const { repos } = props;

  const language = function() {
    if (repos === false) {return 'No valid user' };
    if (repos.length === 0) { return 'The user has no repos'};
    const topLanguage = props.selectLanguage(repos);
    if (topLanguage === undefined) { return 'The user\'s repos have no programming language' }
    return topLanguage;
  };

  return (
    <div id="favourite-langauge">
      {language()}
    </div>
  )
}

export default FavouriteLanguage;
