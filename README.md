# <img style="width:25px; height:25px;" src="./assets/swissborg.svg"> SwissBorg Tech Challenge :muscle:

> This repository was created for QA exercises.

<br />

---

<br />

## Index

- [Systems Under Test (SUT)](#systems-under-test-sut)

- [Exercise 1](#exercise-1)

  - [Exploratory Manual Test](#manual-tests-folder)
  - [Test Automation (UI and API)](#test-automation)

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

This exercise consists of two parts. In the first part, I investigated the first SUT and documented all my findings under the `./manual.tests` folder. In the second part, test automation involves both UI and API automated tests. I used `Playwright Test Framework` with `Ts` Language.

<br />

### Manual Tests Folder

#### Bug Reports

I haven't created any defect or bug reports for a while. Because many agile teams are now using some productivity tools such as Jira, Test Rail, Xray, etc. to record and track their findings. But for the sake of exercises, I created a bug report under the `./manual.tests` folder.

<br />

:bug: [Please click here](manual.tests/bug.reports/_bug.report.md) to open the **bug report**. :bug:

<br />

I tried to add `must-have` fields to my bug report. All screenshots related to manual tests are stored under the `./manual.tests/screenshots` folder and they are named with its bugId + underscore + pictureNumber. For example, if the screenshots belong to bugId: 101, screenshots could be 101_01, 101_02, etc.

I didn't create all the screenshots. I gave some examples of how it could be done for the bug report.

<br />

#### Test Cases

I documented some test cases as examples under the `./manual.tests/test.cases` folder.
</br>
:mag_right: [Please click here](manual.tests/test.cases/test.cases.md) to open **sample test cases**. :mag_right:

<br />

### Test Automation

I automated some test cases under the `./tests` folder. Each test cases are very self-explanatory with comments. They are kind of test steps.

The factorial calculator exposes an **API URL** so I also created API test cases as well as UI test cases. These tests use `Mocha or Jest` style BDD test cases. It could be `Cucumber (Gherkin)` based test cases but I preferred them this way. If semi-technical people join the test process or if we are creating acceptance criteria then Cucumber might be a good choice since people find all When-Then steps easy. But personally, I find mocha-style test cases very flexible and it is just fun.

<br />

For integer numbers in **range (10, 100)** test cases placed [here](https://github.com/ikoral/swiss-borg-challenge/blob/d4e4be9a0728181818d5e6c4899e8b7741bea70b/tests/calculator.api/calculator.api.test.ts#L69)

<br />

I already run automation and the nice execution HTML report is under the `./playwright-report` folder. **Served HTML Report** is [here](https://ikoral.github.io/swiss-borg-challenge/playwright-report/index.html). You may click all test cases and see the steps. When you click the failed test cases you may also see screenshots.

<br />

## Exercise 2

Acceptance criteria can be written in different formats based on context and requirements. I saw two different types of them widely used in my experience:

- The first one is scenario-based (Given-When-Then pattern)
- The second one is task-based (or rule-based) mainly consists of a checklist of tasks.

I tried to write two Acceptance Criteria used two different ways. Please find under the `./acceptance.criteria` folder.

<br />

## Setup

### Prerequisites

This project requires `node v16.#` and at least one browser (chrome or firefox) to be installed.

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

### Run your test under the tests folder

This command runs all tests under the `./tests` folder with the provided config file. Playwright runs all tests in headless mode by default. If you add `headed` flag, you can see the browser for UI tests.

```
  npx playwright test tests --config=playwright.config.ts --headed`
```

You can add a decorator/tag to your test cases with `@` symbol. Please look at the examples under the tests folder. Then you may want to execute the specific tests which have a specific decorator. Below, the command runs all test cases with the `@navigation` tag under the tests folder no matter which sub-folder they are in.

`npx playwright test --grep @navigation --config=playwright.config.ts --headed`

For detailed command and command flags please refer to Playwright **[documentation](https://playwright.dev/docs/test-cli)**.

### Open the latest test execution report

if any tests fail, Playwright will open HTML test report by default. You can also open the latest execution report by running the below command:

`npx playwright show-report playwright-report/html.report`
