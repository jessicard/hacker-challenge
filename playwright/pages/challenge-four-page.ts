import { Page } from "@playwright/test";

export class ChallengeFour {
  readonly heading = this.page.getByRole("heading", { name: "Challenge #4: Where's the challenge?" });
  readonly url = "http://localhost:8000/challenges/normal/duck.html";
  readonly invisibleLink = this.page.locator('a.button-style-link.hidden');
  readonly visibleLink = this.page.getByText('I am an invisible link! Remove my "hidden" class to see me!');

  constructor(public readonly page: Page) {}

  async openPage() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("domcontentloaded");
  }
}
