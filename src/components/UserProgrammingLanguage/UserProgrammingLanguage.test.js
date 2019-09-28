import '../../testHelper.js';
import UserProgrammingLanguage from './UserProgrammingLanguage';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<UserProgrammingLanguage />)
});

describe('UserProgrammingLanguage', () => {
  describe('onHandleChangeName', () => {
    it('holds the user\'s name as state', () => {
      const instance = wrapper.instance()
      const eventMock = { target:{ value:'test' } }
      instance.onHandleChangeName(eventMock);
      expect(wrapper.state('userName')).toEqual('test');
    });
  });
  describe('onHandleFetchRepos', () => {
    it('holds data from github Api as state', async () => {
      const functionMock = jest.fn();
      functionMock.mockReturnValue([{ repo:'test' }])
      wrapper = shallow(<UserProgrammingLanguage fetchUserRepos={functionMock} />);
      const instance = wrapper.instance()
      await instance.onHandleFetchRepos()
      expect(functionMock).toHaveBeenCalled()
      expect(wrapper.state('repos')).toEqual([{ repo:'test' }])
    });
  });
});