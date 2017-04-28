import { EventSysPage } from './app.po';

describe('event-sys App', () => {
  let page: EventSysPage;

  beforeEach(() => {
    page = new EventSysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
