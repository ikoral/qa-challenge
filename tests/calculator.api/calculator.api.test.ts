import { request } from "@playwright/test";
import { test, expect } from "@playwright/test";

export const makePostCallForFactorial = async (value: string) => {
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

test("Should calculate 3! as 6", async () => {
  const response = await makePostCallForFactorial("3");
  expect(response.answer === 6).toBeTruthy();
});
