/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import '../../testHelper';
import FilterDataForLanguage from './FilterDataForLanguage';
import FavouriteLanguage from '../FavouriteLanguage/FavouriteLanguage';

describe('FilterDataForLanguage', () => {
  it('returns a message if the user has no repos', () => {
    const wrapper = shallow(<FilterDataForLanguage
      repos={[]}
    />);
    expect(wrapper.text()).toEqual('The user has no repos');
  });

  it('handles edge case of no valid user', () => {
    const wrapper = shallow(<FilterDataForLanguage
      repos={[{ user: 'no-user' }]}
    />);
    expect(wrapper.text()).toEqual('No valid user');
  });

  it('renders FavouriteLanguage component', () => {
    const wrapper = shallow(<FilterDataForLanguage
      repos={[{ id: 1 }]}
    />);
    expect(wrapper.find(FavouriteLanguage)).toHaveLength(1);
  });
});
