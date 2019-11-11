import '../testHelper';
import fetch from '../modules/fetchUserRepos/fetchMock';

const puppeteer = require('puppeteer');

describe('F.P.L', () => {
  it('The user input a user\'s name and see the user favourite language', async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('#user-name');
    await page.type('#user-name', 'test');
    await page.setRequestInterception(true);
    await page.on('request', (request) => {
      const url = request.url();
      if (request.resourceType(fetch)) {
        if (url === 'https://api.github.com/search/users?q=test') {
          request.respond({
            body: JSON.stringify(
              { items: [{ repos_url: 'https://api.github.com/users/test/repos' }] },
            ),
          });
        } else if (url === 'https://api.github.com/users/test/repos') {
          request.respond({
            body: JSON.stringify(
              [{ id: 1, language: 'ruby' }, { id: 2, language: 'javascript' }, { id: 3, language: 'javascript' }],
            ),
          });
        }
      }
    });
    await page.click('#submit-name');
    await page.waitForSelector('#favourite-langauge');
    const found = await page.evaluate(() => window.find('javascript'));
    expect(found).toBe(true);
    await browser.close();
  });
});
