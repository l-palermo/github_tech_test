import '../../testHelper';
import SearchBar from './SearchBar';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<SearchBar />)
});

describe('SearchBar', () => {

  it('renders an input box', () => {
    const inputBox = wrapper.find({ id:'user-name' })
    expect(inputBox).toHaveLength(1);
  });
  
  it('renders a submit button', () => {
    const submitButton = wrapper.find({ id:'submit-name' })
    expect(submitButton).toHaveLength(1)
  });

  describe('handleFetchRepos', () => {
    it('fires the parent component method', () => {
      const onHandleFetchReposMock = jest.fn()
      const wrapper = shallow(<SearchBar onHandleFetchRepos={onHandleFetchReposMock} />)
      const submitButton = wrapper.find({ id:'submit-name' })
      submitButton.simulate('click')
      expect(onHandleFetchReposMock).toHaveBeenCalled();
    });
  });

  describe('handleChangeName', () => {
    it('pass the event to the parent component method', () => {
      const onHandleChangeNameMock = jest.fn()
      const wrapper = shallow(<SearchBar onHandleChangeName={onHandleChangeNameMock} />)
      const inputField = wrapper.find({ id:'user-name' })
      inputField.simulate('change')
      expect(onHandleChangeNameMock).toHaveBeenCalled();
    });
  });
});
