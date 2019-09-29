import selectLanguage from './selectLanguage';
import languagesRate from '../languagesRate/languagesRate';

describe('selectLanguage', () => {
  it('returns the language with the highest rate', () => {
    const listReposMock = [{ language: 'ruby' }, { language: 'ruby' }];
    const list = { ruby: 2, javascript: 1}
    const mock = jest.spyOn({languagesRate}, 'languagesRate')
/*     const funMock = jest.mock('../languagesRate/languagesRate', () => () => ({
      ruby: 2, javascript: 1
    })); */
    mock.mockReturnValue(list)
/*     const spy = { languagesRate }
    const spy1 = spy.languagesRate = jest.fn(); */
    expect(selectLanguage(listReposMock, mock)).toEqual('ruby');
    expect(mock).toHaveBeenCalled();
  });
});
