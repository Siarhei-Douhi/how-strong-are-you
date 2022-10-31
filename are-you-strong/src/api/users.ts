export async function getUsers() {
  const USERS_URL = "http://localhost:3001/users";
  const response = await fetch(USERS_URL);
  return response;
}
