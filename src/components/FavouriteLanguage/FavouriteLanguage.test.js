import '../../testHelper';
import FavouriteLanguage from './FavouriteLanguage';

let selectLanguageMock;
beforeEach(() => {
  selectLanguageMock = jest.fn();
});

describe('FavouriteLanguage', () => {
  describe('language', () => {
    it('returns the user favorite programming language', () => {
      selectLanguageMock.mockReturnValue('JavaScript');
      const wrapper = shallow(<FavouriteLanguage
        selectLanguage={selectLanguageMock}
      />);
      expect(selectLanguageMock).toHaveBeenCalled();
      expect(wrapper.text()).toEqual('JavaScript');
    });

    it('returns a message if the user\'s repos do not have language', () => {
      selectLanguageMock.mockReturnValue(undefined);
      const wrapper = shallow(<FavouriteLanguage
        selectLanguage={selectLanguageMock}
      />);
      expect(wrapper.text()).toEqual('The user\'s repos have no programming language');
    });
  });
});
