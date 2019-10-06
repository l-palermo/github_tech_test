import React from 'react';
import UserProgrammingLanguage from './components/UserProgrammingLanguage/UserProgrammingLanguage';
import fetchUserRepos from './modules/fetchUserRepos/fetchUserRepos';

function App() {
  return (
    <UserProgrammingLanguage
      fetchUserRepos={fetchUserRepos}
    />
  );
}

export default App;
