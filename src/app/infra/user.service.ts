const serverUrl = process.env["SERVER_URL"];

export async function fetchUsers() {
  const response = await fetch(`${serverUrl}/users`);
  return response.json();
}
