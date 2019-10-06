export default async function fetchUserRepos(userName) {
  const gitHubApi = `https://api.github.com/search/users?q=${userName}`;
  try {
    const reposURL = await fetch(gitHubApi)
      .then((promise) => promise.json()).then((data) => {
        if (data.total_count === 0) { return [{ user: 'no-user' }]; }
        return data.items[0].repos_url;
      });
    if (reposURL[0].user === 'no-user') { return reposURL; }
    const userRepos = await fetch(reposURL)
      .then((promise) => promise.json()).then((data) => data);
    return await userRepos;
  } catch (err) { return err; }
}
