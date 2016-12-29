import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class CvPage {
=======
export class CVPage {
>>>>>>> 94763eaea6a8d021f266a7e94837380722c63d0e
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
