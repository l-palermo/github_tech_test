export default function () {
  return Promise.resolve({
    json: () => Promise.resolve(
      {
        items:
        [{ repos_url: 'https://api.github.com/users/test/repos' }],
      },
    ),
  });
}
