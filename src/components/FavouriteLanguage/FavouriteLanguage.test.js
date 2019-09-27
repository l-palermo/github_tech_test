import '../../testHelper';
import FavouriteLanguage from './FavouriteLanguage'

let wrapper;
beforeEach(() => {
  wrapper = shallow(<FavouriteLanguage />)
})

describe('FavouriteLanguage', () => {
  it('renders the user\'s favourite language', () => {
    expect(wrapper.text()).toEqual('JavaScript')
  });
});