export default async function fetchUserRepos(userName) {
  const gitHubApi = 'https://api.github.com/search/users?q=' + userName;
  try {
    let reposURL = await fetch(gitHubApi)
    .then(promise => {
      return promise.json();
    }).then(data => {
      return data.items[0].repos_url
    })
    const userRepos = await fetch(reposURL)
    .then(promise => {
      return promise.json();
    })
    return await userRepos;
  } catch (err) {
    console.log(err)
  }
}
