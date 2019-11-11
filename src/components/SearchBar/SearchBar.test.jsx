import '../../testHelper';
import { shallow } from 'enzyme';
import React from 'react';
import SearchBar from './SearchBar';

let wrapper;
const onHandleFetchReposMock = jest.fn();
beforeEach(() => {
  wrapper = shallow(<SearchBar
    onHandleFetchRepos={onHandleFetchReposMock}
  />);
});

describe('SearchBar', () => {
  it('renders an input box', () => {
    const inputBox = wrapper.find({ id: 'user-name' });
    expect(inputBox).toHaveLength(1);
  });

  it('renders a submit button', () => {
    const submitButton = wrapper.find({ id: 'submit-name' });
    expect(submitButton).toHaveLength(1);
  });

  describe('handleChangeName', () => {
    it('passes the event to the parent component method', () => {
      const inputField = wrapper.find({ id: 'user-name' });
      inputField.simulate('change', { target: { value: 'test' } });
    });
  });

  describe('handleFetchRepos', () => {
    it('fires the parent component method', () => {
      const submitButton = wrapper.find({ id: 'submit-name' });
      submitButton.simulate('click');
      expect(onHandleFetchReposMock).toHaveBeenCalled();
    });
  });
});
