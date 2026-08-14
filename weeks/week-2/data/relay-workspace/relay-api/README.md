# relay-api

Owns `data/tasks.json` and serves it over HTTP for anything that cannot read the disk.

## Run

```
npm start          # listens on :4117
```

## Routes

```
GET  /tasks        open tasks
POST /tasks        add a task  {"title": "...", "owner": "..."}
POST /done?id=N    mark task N done
```

Most of the team's tooling still reads the data file straight from disk.
