import { beforeAll, describe, expect, expectTypeOf, test } from "vitest";

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

describe("Request for available tasks from API", () => {
  let response: Response;
  let body: Array<{ [key: string]: unknown }>;

  beforeAll(async () => {
    response = await fetch("https://task-api-qkge.onrender.com/tasks");
    body = await response.json();
  }, BEFORE_ALL_TIMEOUT);

  test("Should have response status 200", () => {
    expect(response.status).toBe(200);
  });

  test("Should have content-type", () => {
    expect(response.headers.get("Content-Type")).toBe(
      "application/json; charset=utf-8"
    );
  });

  test("Should have array in the body", () => {
    expectTypeOf(body).toBeArray();
  });
});
