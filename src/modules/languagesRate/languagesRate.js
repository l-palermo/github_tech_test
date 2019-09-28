export default function languagesRate(repos) {
  let languageList = {};
  repos.forEach(function(repo) {
    if(repo.language === null) { return }
    languageList[repo.language] = (languageList[repo.language]||0) + 1;
  });
  return languageList
};
