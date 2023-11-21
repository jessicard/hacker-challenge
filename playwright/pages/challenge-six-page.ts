import { Page } from "@playwright/test";

export class ChallengeSix {
  readonly heading = this.page.getByRole("heading", { name: "Challenge #6: Find the password in Local Storage" });
  readonly url = "http://localhost:8000/challenges/normal/fox.html";
  readonly passwordInput = this.page.getByPlaceholder("Enter password");
  readonly submit = this.page.getByRole("button", { name: "Submit" });

  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
