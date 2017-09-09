import { ToeflWordsAppPage } from './app.po';

describe('toefl-words-app App', () => {
  let page: ToeflWordsAppPage;

  beforeEach(() => {
    page = new ToeflWordsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
