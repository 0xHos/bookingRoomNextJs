import CloseModal from "@/app/components/CloseModel";
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

export default async function Modal({ params }) {
  const { id } = params;

  const room: IRoom = await API.getRoom(id);
  if (room.error) {
    notFound();
  }

  return (
    <div className="fixed inset-0 z-[51] flex flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="relative top-[10]">
        <CloseModal />
      </div>
      <div className="relative w-full max-w-4xl p-7 bg-white rounded-lg shadow-lg h-[90vh] overflow-y-auto">
        <div className="flex flex-col">
          <Headeing title="Room Details" />

          <section className="flex gap-6 items-center justify-center">
            <img
              className="object-cover size-96 rounded-lg"
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
          <div className="bg-slate-100 px-10 py-3 mt-7 rounded-lg">
            <CreateBooking room_id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
