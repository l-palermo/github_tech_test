import React from 'react';

function FavouriteLanguage(props) {
  const { repos } = props;

  const language = function () {
    const topLanguage = props.selectLanguage(repos);
    if (topLanguage === undefined) { return 'The user\'s repos have no programming language' }
    return topLanguage;
  };

  return (
    <div id="favourite-langauge">
      {language()}
    </div>
  );
};

export default FavouriteLanguage;
