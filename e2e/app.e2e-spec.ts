import { Adventure2Page } from './app.po';

describe('adventure2 App', () => {
  let page: Adventure2Page;

  beforeEach(() => {
    page = new Adventure2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
