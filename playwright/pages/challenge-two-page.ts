import { Page } from "@playwright/test";

export class ChallengeTwo {
  readonly heading = this.page.getByRole("heading", { name: "Challenge #2: Click the button" });
  readonly url = "http://localhost:8000/challenges/normal/bat.html";
  readonly clickMe = this.page.getByRole("button", { name: "Click me!" });

  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
