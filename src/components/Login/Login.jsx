import {
  useLoaderData,
  useActionData,
  useNavigation,
  redirect,
  Form,
} from "react-router-dom";

//styles
import styles from "./Login.module.css";

// Utilities
import { loginUser } from "../../api";

// Loader

export async function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

// Action

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", true);
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (err) {
    return err.message;
  }
}

// Component
export default function Login() {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.loginHeader}>
          <h1>Log In</h1>
          {message && <p>{message}</p>}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <Form method="post" replace>
          <label for="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@mail.com"
          />
          <label for="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="**********"
          />

          <button type="submit" disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting" ? "Logging In..." : "Log In"}
          </button>
        </Form>
      </div>
    </div>
  );
}
