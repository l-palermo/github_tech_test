/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import '../../testHelper';
import UserProgrammingLanguage from './UserProgrammingLanguage';

let wrapper;
let instance;
let functionMock;
beforeEach(() => {
  functionMock = jest.fn();
  functionMock.mockReturnValue([{ repo: 'test' }]);
  wrapper = shallow(<UserProgrammingLanguage fetchUserRepos={functionMock} />);
  instance = wrapper.instance();
});

describe('UserProgrammingLanguage', () => {
  describe('onHandleFetchRepos', () => {
    it('holds data from github Api as state', async () => {
      instance.state.userName = 'test';
      await instance.onHandleFetchRepos();
      expect(functionMock).toHaveBeenCalled();
      expect(wrapper.state('repos')).toEqual([{ repo: 'test' }]);
    });

    it('handles edge case of no input', async () => {
      const userName = '';
      await instance.onHandleFetchRepos(userName);
      expect(functionMock).not.toHaveBeenCalled();
    });
  });
});
