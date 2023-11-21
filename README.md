# QA automation of hacker-challenge
- We're using different tools/frameworks to automate the tasks within the hacker-challenge.
- All challenges should be completed as closely to human interaction as possible.
- Feel free to execute your tests against a locally hosted version of the hacker-challenge, see below.


Original hosted at: https://hacker-challenge.netlify.app/

Forked from Github: https://github.com/jessicard/hacker-challenge

## Contribution to QA Automation challenge
- Create a subfolder for your automation tool/framework of choice and automate all challenges.
- All automation solutions should include hints on test execution (i.e. package.json or separate Readme)

## Running hacker-challenge locally
To run locally use `python -m SimpleHTTPServer` in your terminal and then open `http://localhost:8000` (or similiar, check terminal output) in your browser.

Or use Python 3 `python3 -m http.server` to run the hacker-challenge.


- NOTE: Playwright test execution includes the local start of the webserver, see playwright.config.ts.

