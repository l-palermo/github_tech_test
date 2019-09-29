import selectLanguage from './selectLanguage';

describe('selectLanguage', () => {
  it('returns the language with the highest rate', () => {
    const listReposMock = [{ language: 'ruby' }, { language: 'ruby' }];
    const list = { ruby: 2, javascript: 1 };

    const mock = jest.fn();
    mock.mockReturnValue(list);
    expect(selectLanguage(listReposMock, mock)).toEqual('ruby');
    expect(mock).toHaveBeenCalled();
  });
});
