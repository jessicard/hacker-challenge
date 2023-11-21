import { Page } from "@playwright/test";

export class StartPage {
  readonly normalChallenge = this.page.getByRole('link', { name: 'Start normal challenge mode' });
  readonly hardChallenge = this.page.getByRole('link', { name: 'Start hard challenge mode' });
  readonly url = "http://[::]:8000/";

  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }
}
