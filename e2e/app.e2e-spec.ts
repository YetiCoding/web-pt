import { WebPtPage } from './app.po';

describe('web-pt App', () => {
  let page: WebPtPage;

  beforeEach(() => {
    page = new WebPtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
