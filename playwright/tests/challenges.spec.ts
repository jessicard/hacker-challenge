import { test, expect } from "@playwright/test";
import { StartPage } from "../pages/start-page";
import { ChallengeOne } from "../pages/challenge-one-page";
import { ChallengeTwo } from "../pages/challenge-two-page";
import { ChallengeThree } from "../pages/challenge-three-page";
import { ChallengeFour } from "../pages/challenge-four-page";
import { ChallengeFive } from "../pages/challenge-five-page";
import { ChallengeSix } from "../pages/challenge-six-page";
import { ChallengeSeven } from "../pages/challenge-seven-page";
import { ChallengeEight } from "../pages/challenge-eight-page";
import { ChallengeNine } from "../pages/challenge-nine-page";
import { ChallengeTen } from "../pages/challenge-ten-page";
import { CompletePage } from "../pages/complete-page";

test.describe("Hacker challenge speedrun", () => {
  let startPage: StartPage;
  let challengeOnePage: ChallengeOne;
  let challengeTwoPage: ChallengeTwo;
  let challengeThreePage: ChallengeThree;
  let challengeFourPage: ChallengeFour;
  let challengeFivePage: ChallengeFive;
  let challengeSixPage: ChallengeSix;
  let challengeSevenPage: ChallengeSeven;
  let challengeEightPage: ChallengeEight;
  let challengeNinePage: ChallengeNine;
  let challengeTenPage: ChallengeTen;
  let completePage: CompletePage;
  let CHALLENGE_TEN_PASSWORD_URL = "http://localhost:8000/challenges/normal/jellyfish-password.json";

  test("First challenge", async ({ page }) => {
    startPage = new StartPage(page);
    challengeOnePage = new ChallengeOne(page);
    challengeTwoPage = new ChallengeTwo(page);

    await startPage.openPage();
    await expect(page).toHaveTitle("Hacker Challenge");

    await startPage.normalChallenge.click();
    await expect(challengeOnePage.heading).toBeVisible();

    // find and enter the hidden password
    let password = (await challengeOnePage.passwordInput.getAttribute("data-password")) ?? "NO PASSWORD FOUND";
    await challengeOnePage.passwordInput.fill(password);
    await challengeOnePage.submit.click();

    await expect(challengeTwoPage.heading).toBeVisible();
  });

  test("Second challenge", async ({ page }) => {
    challengeTwoPage = new ChallengeTwo(page);
    challengeThreePage = new ChallengeThree(page);

    await challengeTwoPage.openPage();
    await expect(challengeTwoPage.heading).toBeVisible();

    // enable and click button
    await challengeTwoPage.clickMe.evaluate((node) => node.removeAttribute("disabled"));
    await challengeTwoPage.clickMe.click();

    await expect(challengeThreePage.heading).toBeVisible();
  });

  test("Third challenge", async ({ page }) => {
    challengeThreePage = new ChallengeThree(page);
    challengeFourPage = new ChallengeFour(page);

    await challengeThreePage.openPage();
    await expect(challengeThreePage.heading).toBeVisible();

    // double click
    await challengeThreePage.heading.dblclick();

    await expect(challengeFourPage.heading).toBeVisible();
  });

  test("Fourth challenge", async ({ page }) => {
    challengeFourPage = new ChallengeFour(page);
    challengeFivePage = new ChallengeFive(page);

    await challengeFourPage.openPage();
    await expect(challengeFourPage.heading).toBeVisible();

    // show and click link
    // dificulty: locator for hidden element & removal of css class
    // // await challengeFourPage.invisibleLink.evaluate((node) => node.removeAttribute("hidden"));
    // solution: use pure JS!
    const element = await page.$("a.button-style-link.hidden");
    expect(element).toBeTruthy();

    // for the sake of inline compiler errors we have to check if element exists
    if (!element) {
      console.error("Hidden element not found.");
      return;
    }
    // remove css class "hidden"
    await element.evaluate((el) => {
      el.classList.remove("hidden");
    });

    await expect(challengeFourPage.visibleLink).toBeVisible(); //apparently always visible to playwright even with "hidden" class
    await challengeFourPage.visibleLink.click();

    await expect(challengeFivePage.heading).toBeVisible();
  });

  test("Fiveth challenge", async ({ page }) => {
    let correctUrl: string;
    challengeFivePage = new ChallengeFive(page);
    challengeSixPage = new ChallengeSix(page);

    await challengeFivePage.openPage();
    await expect(challengeFivePage.heading).toBeVisible();

    // get name of next challenge from attribute
    let nextChallenge = await challengeFivePage.textButton.getAttribute("data-next-animal");
    // update url of text button
    correctUrl = "/challenges/normal/" + nextChallenge + ".html";

    const button = await page.$("a.button-style-link");
    expect(button).toBeTruthy();

    // for the sake of inline compiler errors we have to check if element exists
    if (!button) {
      console.error("Button not found.");
      return;
    }
    // update href attribute of button
    // evaluate() is executed in browser's page context unlike playwright which is run in node.js context
    // we have to pass correctUrl into the evaluate context which becomes the last param of the evaluated lambda 'url'
    await button.evaluate((el, url) => {
      el.setAttribute("href", url);
    }, correctUrl);

    await challengeFivePage.textButton.click();

    await expect(challengeSixPage.heading).toBeVisible();
  });

  test("Sixth challenge", async ({ page }) => {
    challengeSixPage = new ChallengeSix(page);
    challengeSevenPage = new ChallengeSeven(page);

    await challengeSixPage.openPage();
    await expect(challengeSixPage.heading).toBeVisible();

    //  get password from local storage
    const localStorage = await page.evaluate(() => window.localStorage);
    const password = localStorage["password"];

    // enter password and submit
    await challengeSixPage.passwordInput.fill(password);
    await challengeSixPage.submit.click();

    await expect(challengeSevenPage.heading).toBeVisible();
  });

  test("Seventh challenge", async ({ page }) => {
    challengeSevenPage = new ChallengeSeven(page);
    challengeEightPage = new ChallengeEight(page);

    // Get console log messages
    // https://stackoverflow.com/a/60075804
    let logMessage: any;
    page.on("console", async (e) => {
      const args = await Promise.all(e.args().map((a) => a.jsonValue()));
      console.log(...args);
      logMessage = args;
    });

    await challengeSevenPage.openPage();
    await expect(challengeSevenPage.heading).toBeVisible();

    // click submit 3 times
    await challengeSevenPage.submit.dblclick();
    await challengeSevenPage.submit.click();

    // enter password from console log and submit
    let password = logMessage[0].split(/\s+/).at(-1); //[ 'The password is pr3st0' ] -> 'pr3st0'
    await challengeSevenPage.passwordInput.fill(password);
    await challengeSevenPage.submit.click();

    await expect(challengeEightPage.heading).toBeVisible();
  });

  test("Eigth challenge", async ({ page }) => {
    challengeEightPage = new ChallengeEight(page);
    challengeNinePage = new ChallengeNine(page);

    await challengeEightPage.openPage();
    await expect(challengeEightPage.heading).toBeVisible();

    // remove blocker
    await challengeEightPage.blocker.evaluate((el) => {
      el.remove();
    });

    await expect(challengeEightPage.nextChallenge).toBeVisible();
    await challengeEightPage.nextChallenge.click();

    await expect(challengeNinePage.heading).toBeVisible();
  });

  test("Nineth challenge", async ({ page }) => {
    challengeNinePage = new ChallengeNine(page);
    challengeTenPage = new ChallengeTen(page);

    await challengeNinePage.openPage();
    await expect(challengeNinePage.heading).toBeVisible();

    // reveal password image
    await challengeNinePage.passwordImage.evaluate((el) => {
      el.style.visibility = "visible";
    });
    await expect(challengeNinePage.passwordImage).toBeVisible();

    // fill in password and proceed
    await challengeNinePage.passwordInput.fill(challengeNinePage.password);
    await challengeNinePage.submit.click();

    await expect(challengeTenPage.heading).toBeVisible();
  });

  test("Tenth challenge", async ({ page, request }) => {
    challengeTenPage = new ChallengeTen(page);
    completePage = new CompletePage(page);

    await challengeTenPage.openPage();
    await expect(challengeTenPage.heading).toBeVisible();

    // make api requests to get password -> 'jellyfish-password'
    const response = await request.get(CHALLENGE_TEN_PASSWORD_URL);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const password = responseBody["password"]

    // fill in password and proceed
    await challengeTenPage.passwordInput.fill(password);
    await challengeTenPage.submit.click();

    await expect(completePage.congratulations).toBeVisible();
  });
});
