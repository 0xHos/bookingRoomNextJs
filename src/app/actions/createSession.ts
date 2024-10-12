"use server";
import { cookies } from "next/headers";
import API from "../services/api";

export async function createSession(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return {
      error: "Please enter email and password.",
    };
  }
  const auth = await API.login(email, password);
  if (auth.error) {
    return {
      error: auth.error,
    };
  }
  cookies().set("appwrite-session", auth.jwt);
  cookies().set("appwrite-user_id", auth.userId);

  return {
    success: "Login success",
    auth: auth,
  };
}
