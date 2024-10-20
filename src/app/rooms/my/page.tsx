import getMyRooms from "@/app/actions/myRoom";
import DeleteRoom from "@/app/components/DeleteBooking";
import { IRoom } from "@/app/types/type";
import { revalidatePath } from "next/cache";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";

interface PropRoomCard {
  id: string;
  img: string;
  title: string;
  address: string;
  availability: string;
  price: string;
  bed?: string;
  bathroom?: string;
}

function RoomCard(info: PropRoomCard) {
  return (
    <>
      <div className="flex flex-col shadow-md  m-3 bg-white rounded-lg  ">
        <div className="rounded-lg ">
          <img
            className="object-cover size-full rounded-t-lg"
            src={info.img}
            alt={info.title}
          />
        </div>
        <div className="flex flex-col items-start space-y-4 p-4 ">
          <h2 className={`text-lg font-bold text-slate-600  w-full `}>
            {info.title}
          </h2>

          <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-500 mr-2" />
              <span className="text-slate-600">{info.address}</span>
            </div>
            <div className="flex items-center">
              <IoBedOutline title="bed count" className="text-red-500 mr-2" />
              <span className="text-slate-600">{info.bed} Bed</span>
            </div>
            <div className="flex items-center">
              <MdOutlineBathroom
                title="bathroom"
                className="text-blue-500 mr-2"
              />
              <span className="text-slate-600">{info.bathroom} Bathroom</span>
            </div>
            <div className="flex items-center">
              <FaSackDollar className="text-green-500 mr-2" />
              <span className="text-slate-600">{info.price}$ in hour</span>
            </div>
          </div>
          <DeleteRoom id={info.id} />
        </div>
      </div>
    </>
  );
}

export default async function MyRoom() {
  const rooms: IRoom[] = await getMyRooms();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rooms?.map((room) => (
          <div
            key={room.$id}
            className="col-span-1  hover:scale-105  transition-transform duration-300 ease-in-out transform"
          >
            <RoomCard {...room} key={room.$id} id={room.$id} />
          </div>
        ))}
      </div>
    </>
  );
}
