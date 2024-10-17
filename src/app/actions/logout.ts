"use server";
import { cookies } from "next/headers";

export default function act_logout() {
  cookies().delete("appwrite-user_id");
}
