import { MobilePage } from './app.po';

describe('mobile App', function() {
  let page: MobilePage;

  beforeEach(() => {
    page = new MobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
