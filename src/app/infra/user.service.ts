const serverUrl = import.meta.env["NG_APP_SERVER_URL"];

export async function fetchUsers() {
  const response = await fetch(`${serverUrl}/users`);
  return response.json();
}
