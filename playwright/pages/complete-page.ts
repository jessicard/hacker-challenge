import { Page } from "@playwright/test";

export class CompletePage {
  readonly congratulations = this.page.getByText(/Congratulations!/i );
  readonly url = "http://localhost:8000/complete.html";


  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
