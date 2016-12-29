<<<<<<< HEAD
import { CvPage } from './app.po';

describe('cv App', function() {
  let page: CvPage;

  beforeEach(() => {
    page = new CvPage();
=======
import { CVPage } from './app.po';

describe('cv App', function() {
  let page: CVPage;

  beforeEach(() => {
    page = new CVPage();
>>>>>>> 94763eaea6a8d021f266a7e94837380722c63d0e
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
