const test = require("node:test");
const assert = require("node:assert");

test("store module loads", () => {
  const store = require("../src/store");
  assert.ok(store.load);
  assert.ok(store.save);
});
