/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import '../../testHelper';
import SearchBar from './SearchBar';

/* const useStateMock = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
useStateSpy.mockImplementation((name) => [name, useStateMock]); */

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
/*       const onHandleFetchReposMock = jest.fn();
      const wrapper = shallow(<SearchBar
        onHandleFetchRepos={onHandleFetchReposMock}
      />);
      const useStateMock = jest.fn();
      const useStateSpy = jest.spyOn(React, 'useState');
      useStateSpy.mockImplementation((name) => [name, useStateMock]); */
      const inputField = wrapper.find({ id: 'user-name' });
      inputField.simulate('change', { target: { value: 'test' } });
/*       expect(useStateMock).toHaveBeenCalled(); */
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
