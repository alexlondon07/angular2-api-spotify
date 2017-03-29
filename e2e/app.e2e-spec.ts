import { Angular2ApiSpotifyPage } from './app.po';

describe('angular2-api-spotify App', () => {
  let page: Angular2ApiSpotifyPage;

  beforeEach(() => {
    page = new Angular2ApiSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
