import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const TASKS = join(here, "..", "data", "tasks.json");

export function today() {
  return new Date().toISOString().slice(0, 10);
}

export function load() {
  return JSON.parse(readFileSync(TASKS, "utf8"));
}

function save(tasks) {
  writeFileSync(TASKS, JSON.stringify(tasks, null, 2) + "\n");
}

export function add(title) {
  const tasks = load();
  const id = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  tasks.push({ id, title, added: today(), done: null });
  save(tasks);
  return id;
}

export function done(id) {
  const tasks = load();
  const task = tasks.find(t => t.id === id);
  if (!task) throw new Error(`no task ${id}`);
  task.done = today();
  save(tasks);
  return task;
}

export function open() {
  return load().filter(t => !t.done);
}
