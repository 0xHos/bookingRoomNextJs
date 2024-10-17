import CreateBooking from "@/app/components/CreateBooking";
import Headeing from "@/app/components/Heading";
import API from "@/app/services/api";
import { IRoom } from "@/app/types/type";

import Link from "next/link";
import { notFound } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";

export default async function Room({ params }) {
  const { id } = params;

  const room: IRoom = await API.getRoom(id);
  if (room.error) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <Headeing title="Room Details" />
      <Link href={`/`} className="flex items-center gap-2">
        <BiArrowBack /> Back to rooms
      </Link>
      <section className="flex gap-6">
        <img
          className="object-cover size-96"
          width={100}
          height={100}
          src={room.img}
          alt={""}
        />
        <div className="flex flex-col items-start space-y-4 pl-2">
          <h1 className="text-2xl font-semibold text-slate-500">
            {" "}
            {room.title}
          </h1>

          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" />
            <span className="text-slate-600">{room.address}</span>
          </div>
          <div className="flex items-center">
            <IoBedOutline title="bed count" className="text-red-500 mr-2" />
            <span className="text-slate-600">{room.bed} Bed</span>
          </div>
          <div className="flex items-center">
            <MdOutlineBathroom
              title="bathroom"
              className="text-blue-500 mr-2"
            />
            <span className="text-slate-600">{room.bathroom} Bathroom</span>
          </div>
          <div className="flex items-center">
            <FaSackDollar className="text-green-500 mr-2" />
            <span className="text-slate-600">{room.price}$ in hour</span>
          </div>
          <p className="text-slate-500"> {room.description}</p>
        </div>
      </section>
      <div className="">
        <CreateBooking room_id={id} />
      </div>
    </div>
  );
}
