import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    const response = redirect(
      `/login?message= you must login first&redirectTo=${pathname}`
    );
    response.body = true;
    throw response;
  }
  return null;
}
