import getMyRooms from "@/app/actions/myRoom";
import RoomCard from "@/app/components/RoomCard";

export default async function MyRoom() {
  const rooms: [] = await getMyRooms();
  console.log(rooms.rooms);
  return (
    <>
      {" "}
      {rooms?.rooms?.map((room) => (
        <RoomCard {...room} key={room.$id} id={room.$id} />
      ))}
    </>
  );
}
