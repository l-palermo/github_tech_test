import '../../testHelper';
import fetchUserRepos from './fetchUserRepos';
import fetch from './fetchMock';

global.fetch = fetch;

describe('fetchUserRepos', () => {
  it('fetch the user\'s repos', async () => {
    const fetchSpy = jest.spyOn(global, 'fetch');
    await fetchUserRepos('test');
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });
});
