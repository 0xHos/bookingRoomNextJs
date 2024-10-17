"use server";

import { cookies } from "next/headers";
import API from "../services/api";
import { IBooking } from "../types/type";
import { revalidatePath } from "next/cache";

export default async function bookings(prevState, formData) {
  const user = cookies().get("appwrite-user_id")?.value;
  console.log("Authontication", user);
  if (user == "" || !user) {
    return {
      success: false,
      msg: "Not Authorized",
    };
  }
  const room_id = formData.get("room_id");

  const ckout_time = formData.get("ckout_time");
  const ckout_date = formData.get("ckout_date");
  const ckin_date = formData.get("ckin_date");
  const ckin_time = formData.get("ckin_time");
  const booking: IBooking = {
    user_id: cookies().get("appwrite-user_id")?.value || "",
    room_id,
    ckeckin: `${ckin_date} ${ckin_time}`,
    ckeckout: `${ckout_date} ${ckout_time}`,
  };
  const res = await API.createBooking(booking);
  revalidatePath("/bookings");
  return res;
}
