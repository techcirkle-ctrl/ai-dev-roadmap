import { add, done, open } from "./store.js";

const [command, ...rest] = process.argv.slice(2);

switch (command) {
  case "add": {
    const id = add(rest.join(" "));
    console.log(`added ${id}`);
    break;
  }
  case "done": {
    const task = done(Number(rest[0]));
    console.log(`done ${task.id}\t${task.title}`);
    break;
  }
  case "list": {
    for (const task of open()) console.log(`${task.id}\t${task.added}\t${task.title}`);
    break;
  }
  default:
    console.log("usage: cli.js add <title> | done <id> | list");
}
