# <img style="width:25px; height:25px;" src="./assets/swissborg.svg"> SwissBorg Tech Challenge :muscle:

> This repository was created for QA exercises.

<br />

---

<br />

## Index

- [Systems Under Test (SUT)](#systems-under-test-sut)

- [Exercise 1](#exercise-1)

  - [Exploratory Manual Test](#manual-tests)
  - [Test Cases and Test Automation (UI and API)](#test-cases)

- [Exercise 2](#exercise-2)

- [Setup](#setup)

<br />

---

<br />

## Systems Under Test (SUT)

- [Factorial calculator website](https://qainterview.pythonanywhere.com)
- [Avalanche crypto faucet](https://qainterview.pythonanywhere.com)

<br />

## Exercise 1

This exercise consists of two parts. First part, I investigate the first SUT and documented all my findings under `./manual.tests` folder. Second part is mini test automation involves both UI and API automated tests. I used `Playwright Test Framework` with `Ts` Language.

<br />

### Manual Tests

I haven't created any defect or bug reports for a while. Because many agile teams are now using some productivity tools such as Jira, Test Rail, Xray etc. to record and track their findings. But for the sake of exercises I created bug report under `./manual.tests` folder.

<br />

:bug: [Please click here](./manual.tests/_bug.report.md) to open **bug report**. :bug:

<br />

I tried to add `must have` fields to my bug report. All screenshots related to manual tests are stored under `./manual.tests/screenshots` folder and they are named with its bugId + underscore + pictureNumber. For example if the screenshots belongs to bugId: 101, screenshots could be 101_01, 101_02 etc.

I didn't create all the screenshots. I gave some examples how it could be done for manual tests.

<br />

### Test Cases

I didn't documented my test cases separately. Because, based on my findings, common bugs and also common sense (how the website should look like, how the calculator should behave like) I created my test cases under `./tests` folder. And each test cases are very self-explanatory with comments. They are kind of test steps.

Factorial calculator exposes an api url so I also created API test cases as well as UI test cases. These test use `Mocha or Jest` style BDD test cases. It could be `Cucumber (Gherkin)` based test cases but I preferred in this way. If semi-technical people join the test process then Cucumber might be good choices since people find all When-Then steps easy. But personally I find mocha style test cases very flexible and it is just fun.

<br />

## Exercise 2

<br />
<br />
<br />
<br />

## Setup

### Prerequisites

This project requires the `node v16.#` and at least one browser (chrome or firefox) are installed.

### To set up this project on your local machine:

- Clone the project

  ```
   git clone https://github.com/ikoral/swiss-borg-challenge.git`
  ```

- Install Packages & Dependencies

  ```
    npm install
  ```

  then

  ```
    npx playwright install
  ```

### Run your test under tests folder

This command run all tests under `./tests` folder with provided config file. Playwright runs all tests in headless mode by default. If you add `headed` flag, you can see the browser for UI tests.

```
  npx playwright test tests --config=playwright.config.ts --headed`
```

You can add decorator/tag to your test cases with `@` symbol. Please look at examples under tests folder. Then you may want to execute the specific tests which have specific decorator. Below command run all test cases with `@navigation` tag under tests folder no matter which sub-folder they are in.

`npx playwright test --grep @navigation --config=playwright.config.ts --headed`

For detailed command and command flags please refer to playwright **[documentation](https://playwright.dev/docs/test-cli)**.

### Open latest test execution report

if any tests fail, playwright will open html test report by default. You can also open the latest execution report by running below command:

`npx playwright show-report playwright-report/html.report`
