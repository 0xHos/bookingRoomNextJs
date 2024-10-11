import { revalidatePath } from "next/cache";
import RoomCard from "./components/RoomCard";
import Api from "@/app/services/api";

export default async function handler() {
  const rooms: [] = await Api.getAllRooms();
  console.log(rooms);
  revalidatePath("/", "layout");

  return (
    <>
      {rooms.map((room) => (
        <RoomCard {...room} key={room.$id} id={room.$id} />
      ))}
    </>
  );
}
