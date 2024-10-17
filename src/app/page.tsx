import { revalidatePath } from "next/cache";
import RoomCard from "./components/RoomCard";
import Api from "@/app/services/api";

export default async function handler() {
  const rooms: [] = await Api.getAllRooms();
  revalidatePath("/", "layout");

  return (
    <>
      <div className="grid grid-cols-4">
        {rooms.map((room) => (
          <div
            key={room.$id}
            className="col-span-1  hover:scale-105 transition-transform duration-300 ease-in-out transform"
          >
            <RoomCard {...room} key={room.$id} id={room.$id} />
          </div>
        ))}
      </div>
    </>
  );
}
