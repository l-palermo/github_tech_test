import selectLanguage from './selectLanguage';

describe('selectLanguage', () => {
  it('returns the language with the highest rate', () => {
    const list = { ruby: 3, javascript: 2 };
    expect(selectLanguage(list)).toEqual('ruby');
  });
});
