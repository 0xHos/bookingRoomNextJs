"use server";

import { cookies } from "next/headers";
import API from "../services/api";

export default async function getMyRooms() {
  const user_id = cookies().get("appwrite-user_id")?.value || "";
  const rooms = await API.getMyRoomsByUserId(user_id);
  return rooms.documents;
}
