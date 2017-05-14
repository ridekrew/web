import { KrewPage } from './app.po';

describe('krew App', () => {
  let page: KrewPage;

  beforeEach(() => {
    page = new KrewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
