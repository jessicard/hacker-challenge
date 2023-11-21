import { Page } from "@playwright/test";

export class ChallengeThree {
  readonly heading = this.page.getByRole("heading", { name: "Challenge #3: Find the answer in the code" });
  readonly url = "http://localhost:8000/challenges/normal/cow.html";

  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
