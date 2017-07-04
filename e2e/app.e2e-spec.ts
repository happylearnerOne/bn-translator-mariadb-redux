import { BnTranslatorPage } from './app.po';

describe('bn-translator App', () => {
  let page: BnTranslatorPage;

  beforeEach(() => {
    page = new BnTranslatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
