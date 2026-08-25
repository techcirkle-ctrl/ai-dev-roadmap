import { test } from "node:test";
import assert from "node:assert/strict";
import { today, open } from "./store.js";

test("today is an ISO date", () => {
  assert.match(today(), /^\d{4}-\d{2}-\d{2}$/);
});

test("open tasks are not done", () => {
  for (const task of open()) assert.equal(task.done, null);
});
