import { Page } from "@playwright/test";

export class ChallengeFive {
  readonly heading = this.page.getByRole("heading", { name: "Challenge #5: Challenge++" });
  readonly url = "http://[::]:8000/challenges/normal/eel.html";
  readonly textButton = this.page.getByText('This button should link to the next challenge');

  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
