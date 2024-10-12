import getMyRooms from "@/app/actions/myRoom";
import RoomCard from "@/app/components/RoomCard";
import { IRoom } from "@/app/types/type";

export default async function MyRoom() {
  const rooms: IRoom[] = await getMyRooms();
  return (
    <>
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard {...room} key={room.$id} id={room.$id} />)
      ) : (
        <h1 className="text-center font-bold text-4xl text-slate-500 my-52">
          No Rooms Yet
        </h1>
      )}
    </>
  );
}
