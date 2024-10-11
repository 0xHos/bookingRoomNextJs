import Headeing from "@/app/components/Heading";
import API from "@/app/services/api";
import { IRoom } from "@/app/types/type";

import Link from "next/link";
import { notFound } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export default async function Room({ params }) {
  const { id } = params;

  const room: IRoom = await API.getRoom(id);
  if (room.error) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <Headeing title="Executive Meeting Room" />
      <Link href={`/`} className="flex items-center gap-2">
        <BiArrowBack /> Back to rooms
      </Link>
      <section className="flex">
        <img
          className="object-cover w-40 h-40"
          width={100}
          height={100}
          src={room.img}
          alt={""}
        />
        <div className="flex flex-col items-start space-y-4 pl-2">
          <p> {room.description}</p>
          {/* <p> Size: { room.size}</p> */}
          <p> Availability: {room.availability}</p>
          <p> Address: {room.address}</p>
          <p> Price: {room.price}</p>
        </div>
      </section>
      <section className="mt-9">
        <h2 className="font-bold text-2xl">Booking This Room</h2>
        <div className="flex w-full mt-6 gap-10">
          <section className="w-1/2">
            <label htmlFor="date">Check in date</label>
            <br />
            <input type="date" id="date" name="date" className="w-full p-3" />
          </section>
          <section className="w-1/2">
            <label htmlFor="time">Check in time</label>
            <br />
            <input type="time" id="time" name="time" className="w-full p-3" />
          </section>
        </div>

        <div className="flex w-full mt-6 gap-10">
          <section className="w-1/2">
            <label htmlFor="date">Check out date</label>
            <br />
            <input type="date" id="date" name="date" className="w-full p-3" />
          </section>
          <section className="w-1/2">
            <label htmlFor="time">Check out time</label>
            <br />
            <input type="time" id="time" name="time" className="w-full p-3" />
          </section>
        </div>
        <button className="w-full bg-blue-500 text-white p-3 rounded-md my-8">
          Book Now
        </button>
      </section>
    </div>
  );
}
