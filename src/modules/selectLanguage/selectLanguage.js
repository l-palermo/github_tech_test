export default function selectLanguage(list) {
  const favoriteLanguage = Object.keys(list).sort((a, b) => list[b] - list[a]);
  return favoriteLanguage[0];
}
