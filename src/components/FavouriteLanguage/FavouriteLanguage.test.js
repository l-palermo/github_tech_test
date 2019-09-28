import '../../testHelper';
import FavouriteLanguage from './FavouriteLanguage'

let languagesRateMock;
let selectLanguageMock;
beforeEach(() => {
  languagesRateMock = jest.fn();
  selectLanguageMock = jest.fn();
});

describe('FavouriteLanguage', () => {

  describe('language', () => {
    it('returns the user favorite programming language', () => {
      selectLanguageMock.mockReturnValue('JavaScript');
      let wrapper = shallow(<FavouriteLanguage 
                          languagesRate={languagesRateMock} 
                          selectLanguage={selectLanguageMock}
                          />);
      expect(languagesRateMock).toHaveBeenCalled()
      expect(selectLanguageMock).toHaveBeenCalled()
      expect(wrapper.text()).toEqual('JavaScript')
    });

    it('returns a message if the user\'s repos do not have language', () => {
      selectLanguageMock.mockReturnValue(undefined);
      let wrapper = shallow(<FavouriteLanguage 
                          languagesRate={languagesRateMock} 
                          selectLanguage={selectLanguageMock}
                          />);
      expect(languagesRateMock).toHaveBeenCalled()
      expect(selectLanguageMock).toHaveBeenCalled()
      expect(wrapper.text()).toEqual('The user\'s repos have no programming language')
    });
  });
});
