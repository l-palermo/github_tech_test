import React from 'react';

function FavouriteLanguage(props) {

  const language = function() {
    let repos = props.repos
    let list = props.languagesRate(repos)
    let language = props.selectLanguage(list) 
    if(language === undefined) { return 'The user\'s repos have no programming language'}
    return language
  }

  return(
    <div id='favourite-langauge'>
      {language()}
    </div>
  )
};

export default FavouriteLanguage;
