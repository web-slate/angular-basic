import { AngularBasicPage } from './app.po';

describe('angular-basic App', function() {
  let page: AngularBasicPage;

  beforeEach(() => {
    page = new AngularBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
