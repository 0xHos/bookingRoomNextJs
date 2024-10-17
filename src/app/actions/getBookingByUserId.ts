import { cookies } from "next/headers";
import API from "../services/api";

export default async function getBookingByUserId() {
  const user_id = cookies().get("appwrite-user_id")?.value || "";
  const bookings = await API.getBookingByUserId(user_id);
  const rooms = bookings.documents.map(async (booking) => {
    let room = await API.getRoom(booking.room_id);
    return {
      room: room,
      booking: booking,
    };
  });
  const roomsProm = Promise.all(rooms);
  return roomsProm;
}
