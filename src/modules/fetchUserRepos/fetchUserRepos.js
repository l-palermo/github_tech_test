export default async function fetchUserRepos(userName) {
  const gitHubApi = `https://api.github.com/search/users?q=${userName}`;
  try {
    const reposURL = await fetch(gitHubApi)
      .then((promise) => promise.json()).then((data) => data.items[0].repos_url);
    const userRepos = await fetch(reposURL)
      .then((promise) => promise.json()).then((data) => data);
    return await userRepos;
  } catch (err) {
    console.log(err);
  }
}
