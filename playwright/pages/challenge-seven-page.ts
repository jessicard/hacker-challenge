import { Page } from "@playwright/test";

export class ChallengeSeven {
  readonly heading = this.page.getByRole("heading", { name: "Challenge #7: The console contains the answer" });
  readonly url = "http://localhost:8000/challenges/normal/gecko.html";
  readonly passwordInput = this.page.getByPlaceholder("Enter password");
  readonly submit = this.page.getByRole("button", { name: "Submit" });

  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
