import '../../testHelper'
import languagesRate from './languagesRate'

describe('findLanguage', () => {
  it('lists how frequent the language has been used', () => {
    var listReposMock = [{language: 'ruby'}, {language: 'ruby'}, {language: 'javascript'}]
    expect(languagesRate(listReposMock)).toEqual({javascript: 1, ruby: 2})
  });
  it('ignores the language if it results null', () => {
    var listReposMock = [{language: 'ruby'}, {language: 'ruby'}, {language: 'javascript'}, {language: null}]
    expect(languagesRate(listReposMock)).toEqual({javascript: 1, ruby: 2})
  })
})