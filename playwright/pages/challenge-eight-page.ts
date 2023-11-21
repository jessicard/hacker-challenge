import { Page } from "@playwright/test";

export class ChallengeEight {
  readonly heading = this.page.getByRole("heading", { name: "Challenge #8: Move the blocker" });
  readonly url = "http://[::]:8000/challenges/normal/hare.html";
  readonly blocker = this.page.locator('div.blocker');
  readonly nextChallenge = this.page.getByRole("link", { name: "Go to the next challenge" });

  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
