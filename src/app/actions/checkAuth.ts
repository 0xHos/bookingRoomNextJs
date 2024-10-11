"use server";
import { cookies } from "next/headers";

export async function checkAuth() {
  if (cookies().get("appwrite-session")) {
    return {
      isAuth: true,
    };
  } else {
    return {
      isAuth: false,
    };
  }
}
