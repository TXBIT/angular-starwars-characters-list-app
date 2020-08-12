import { AngularSwListMaxPage } from './app.po';

describe('angular-sw-list-max App', () => {
  let page: AngularSwListMaxPage;

  beforeEach(() => {
    page = new AngularSwListMaxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
