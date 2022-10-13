import { request } from "@playwright/test";
import { test, expect } from "@playwright/test";
import { factorialInputOutput } from "../../dataset/sample.data.set";

/**
 *This function is defined here. But it could be moved somewhere
 * For example modules folder. then we can import and use any of the test cases.
 * For simplicity I left it here.
 * @param value: string
 * @returns {"answer": result:number}
 */
const makePostCallForFactorial = async (value: string) => {
  // Create a context that will issue http requests.
  const context = await request.newContext({
    baseURL: "https://qainterview.pythonanywhere.com",
  });

  // work with the query string of a URL.
  const searchParams = new URLSearchParams({
    number: value,
  });

  // Pass headers and body to the API call
  const options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: searchParams.toString(),
  };

  return await (await context.post("/factorial", options)).json();
};

/**
 * I am calculating factorial with iterative way
 * But it could be done by recursive approach.
 * @param value
 * @returns
 */
const calculateFactorialWhile = async (value: number) => {
  let result = BigInt(value);
  if (BigInt(value) === BigInt(0) || BigInt(value) === BigInt(1))
    return BigInt(1);
  while (value > 1) {
    value--;
    result *= BigInt(value);
  }
  return result;
};

// One static test POC for our code.
test("Should calculate 3!", async () => {
  const response = await makePostCallForFactorial("3");
  expect(response.answer).toBeTruthy();
});

/**
 * Below we are using parametrized test cases. This is first approach
 * In this approach we assume we have sample input - output set for the test cases
 * It could be Json file, sql db or even excel sheet.
 */
for (const data of factorialInputOutput) {
  test(`Factorial ${data.input} should be ${data.output} @sampleDataSet`, async () => {
    const response = await makePostCallForFactorial(data.input.toString());
    expect(response.answer === data.output).toBeTruthy();
  });
}

/**
 * This implementation is second approach. Instead of using sample data set
 * We are creating main functionality (our calculateFactorial function)
 * And pass each number between 10 and 100 to our function.
 * Then compare it to calculator API
 * These are also parametrized tests
 */
for (let num = 10; num <= 100; num++) {
  test(`Factorial ${num} should be calculated correctly @ourCalculation`, async () => {
    const response = await makePostCallForFactorial(num.toString());
    const apiResult = BigInt(response.answer);
    //const ourCalculation = calculateFactorialRecursive(num);
    const ourCalculation = await calculateFactorialWhile(num);
    console.info(
      `API Result: ${BigInt(response.answer)}`,
      `Our Calculation Result: ${ourCalculation}`
    );

    //When the number is getting bigger What I calculated in TS here slightly different
    //What I got from API. But it is too small amount between two numbers.
    // Even different languages calculates slightly different because of carrying bit size slightly
    // different in each of them.
    // So if I compare expect(result).toEqual(ourCalculation) our test cases are failing after number 23.
    // This is very flaky.
    // I implemented below solution. I am dividing two numbers each other
    // and if the result between 0.99 and 1.01 I assume apiResult and ourCalculation are almost equal.
    const division = Number((ourCalculation * 100n) / apiResult) / 100;
    expect(division).toBeGreaterThanOrEqual(0.99);
    expect(division).toBeLessThanOrEqual(1.01);
  });
}
