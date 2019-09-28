export default function languagesRate(repos) {
  const languageList = {};
  repos.forEach((repo) => {
    if (repo.language === null) { return; }
    languageList[repo.language] = (languageList[repo.language] || 0) + 1;
  });
  return languageList;
}
