const http = require("http");
const { URL } = require("url");
const store = require("./store");

const PORT = process.env.PORT || 4117;

function json(res, code, body) {
  res.writeHead(code, { "content-type": "application/json" });
  res.end(JSON.stringify(body, null, 2));
}

function fmtDate(d) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const db = store.load();

  if (req.method === "GET" && url.pathname === "/tasks") {
    return json(res, 200, db.tasks.filter(t => !t.done));
  }

  if (req.method === "POST" && url.pathname === "/tasks") {
    let raw = "";
    req.on("data", c => (raw += c));
    req.on("end", () => {
      const { title, owner } = JSON.parse(raw || "{}");
      if (!title) return json(res, 400, { error: "title required" });
      const id = db.tasks.length + 1;
      db.tasks.push({ id, title, owner: owner || "unassigned", done: false, created: fmtDate(new Date()) });
      store.save(db);
      json(res, 201, { id, title });
    });
    return;
  }

  if (req.method === "POST" && url.pathname === "/done") {
    const id = parseInt(url.searchParams.get("id"), 10);
    const task = db.tasks.find(t => t.id === id);
    if (!task) return json(res, 404, { error: `no task ${id}` });
    task.done = true;
    task.completed = fmtDate(new Date());
    db.archive.push(task);
    store.save(db);
    return json(res, 200, task);
  }

  json(res, 404, { error: "routes: GET /tasks · POST /tasks · POST /done?id=N" });
});

server.listen(PORT, () => console.log(`relay-api on :${PORT}`));
