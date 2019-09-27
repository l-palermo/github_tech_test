import '../../testHelper.js';
import UserProgrammingLanguage from './UserProgrammingLanguage';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<UserProgrammingLanguage />)
});

describe('UserProgrammingLanguage', () => {

  it('hold the user\'s name as state', () => {
    const instance = wrapper.instance()
    const eventMock = {target: [{value:'test'}] }
    instance.onHandleSubmitName(eventMock);
    expect(wrapper.state('userName')).toEqual('test');
  });

});