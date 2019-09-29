import languagesRate from '../languagesRate/languagesRate';

export default function selectLanguage(repos, rates = languagesRate) {
  const list = rates(repos);
  const sortedList = Object.keys(list).sort((a, b) => list[b] - list[a]);
  return sortedList[0];
}
