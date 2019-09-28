export default function selectLanguage(list) {
  let favoriteLanguage = Object.keys(list).sort(function(a,b){return list[b]-list[a]})
  return favoriteLanguage[0]
};