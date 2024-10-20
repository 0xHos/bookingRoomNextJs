"use server";

import { revalidatePath } from "next/cache";
import API from "../services/api";

export default async function deleteBookingById(id) {
  const res = await API.deleteBookingById(id);
  revalidatePath("/bookings");
}

export async function deleteRoomById(id) {
  const res = await API.deleteRoomById(id);
  revalidatePath("/rooms/my");
}
