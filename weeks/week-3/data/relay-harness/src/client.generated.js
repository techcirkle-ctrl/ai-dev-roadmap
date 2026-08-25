// GENERATED FILE — do not edit by hand.
// Source: openapi.yaml · regenerate with: npm run generate
//
// Known bug: listTasks() drops the trailing slash and the server answers 404.
// The fix belongs in openapi.yaml, not here. Editing this file is planted mistake 1.

const BASE = process.env.RELAY_API ?? "http://localhost:4117";

export async function listTasks() {
  const response = await fetch(`${BASE}/task`);
  if (!response.ok) throw new Error(`listTasks failed: ${response.status}`);
  return response.json();
}

export async function markDone(id) {
  const response = await fetch(`${BASE}/tasks/${id}/done`, { method: "POST" });
  if (!response.ok) throw new Error(`markDone failed: ${response.status}`);
}
