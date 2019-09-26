import '../../testHelper';
import InputForm from './InputForm';

let wrapper;
beforeEach( () => {
  wrapper = shallow(<InputForm />)
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