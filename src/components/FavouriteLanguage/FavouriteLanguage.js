import React from 'react';

function FavouriteLanguage(props) {
  const language = function () {
    const { repos } = props;
    const list = props.languagesRate(repos);
    const topLanguage = props.selectLanguage(list);
    if (topLanguage === undefined) { return 'The user\'s repos have no programming language'; }
    return topLanguage;
  };

  return (
    <div id="favourite-langauge">
      {language()}
    </div>
  );
}

export default FavouriteLanguage;
