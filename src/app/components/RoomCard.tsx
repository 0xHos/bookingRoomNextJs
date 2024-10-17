import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
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

export default function RoomCard(info: PropRoomCard) {
  return (
    <>
      <div className="flex flex-col shadow-md  m-3 bg-white rounded-lg ">
        <div className="rounded-lg ">
          <img
            className="object-cover size-full rounded-t-lg"
            src={info.img}
            alt={info.title}
          />
        </div>
        <div className="flex flex-col items-start space-y-4 p-4 ">
          <h2 className="text-lg font-bold text-slate-600 text-center w-full">
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
          <Link
            href={`/rooms/${info.id}`}
            className="w-full bg-white text-blue-700 border-2 border-blue-700  hover:border-blue-700 hover:text-white hover:bg-blue-700   rounded-lg text-center p-3 "
          >
            View Room
          </Link>
        </div>
      </div>
    </>
  );
}
