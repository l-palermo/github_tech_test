import '../../testHelper';
import React from 'react';
import { shallow } from 'enzyme';
import UserProgrammingLanguage from './UserProgrammingLanguage';
import SearchBar from '../SearchBar/SearchBar';
import FilterDataForLanguage from '../FilterDataForLanguage/FilterDataForLanguage';

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
  it('renders the SerachBar component', () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });

  it('renders the FilterDataForLanguage component', () => {
    expect(wrapper.find(FilterDataForLanguage)).toHaveLength(1);
  });

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
