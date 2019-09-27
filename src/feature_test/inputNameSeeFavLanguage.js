import '../setupTest.js'

describe('F.P.L', () => {
  it('The user input a user\'s name and see the user favourite language', async() => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('#user-name');
    await page.type('#user-name', 'test');
    await page.click('#submit-name');
    await page.waitForSelector('#favourite-langauge');
    const found = await page.evaluate(() => window.find('javascript'))
    expect(found).toBe(true);
    await browser.close();
  })
})