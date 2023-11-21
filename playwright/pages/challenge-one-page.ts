import { Page } from "@playwright/test";

export class ChallengeOne {
  readonly heading = this.page.getByText("Challenge #1: Find the password hidden in the HTML");
  readonly passwordInput = this.page.getByPlaceholder("Enter password");
  readonly submit = this.page.getByRole("button", { name: "Submit" });

  constructor(public readonly page: Page) {}
}
