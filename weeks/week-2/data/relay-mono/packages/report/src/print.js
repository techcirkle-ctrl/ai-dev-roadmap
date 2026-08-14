#!/usr/bin/env node
// the impure shell: loads data through core, prints the pure report
const store = require("@relay/core");
const { weekly } = require("./report");

console.log(weekly(store.load(), new Date()));
