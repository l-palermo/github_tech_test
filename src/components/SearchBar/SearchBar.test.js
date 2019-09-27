import '../../testHelper';
import SearchBar from './SearchBar';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<SearchBar />)
})

describe('form', () => {

  it('renders an input box', () => {
    const inputBox = wrapper.find({ id:'user-name' })
    expect(inputBox).toHaveLength(1);
  });

  it('renders a submit button', () => {
    const submitButton = wrapper.find({ id:'submit-name' })
    expect(submitButton).toHaveLength(1)
  })
})

describe('handleSubmitName', () => {
  it('pass the event to the parent component', () => {
    const onHandleSubmitNameMock = jest.fn()
    const wrapper = shallow(<SearchBar onHandleSubmitName={onHandleSubmitNameMock} />)
    const eventMock = {preventDefault:function(){}}
    const submitForm = wrapper.find('form')
    submitForm.simulate('submit', eventMock)
    expect(onHandleSubmitNameMock).toHaveBeenCalled();
  })
})