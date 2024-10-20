import { FaMapMarkerAlt } from "react-icons/fa";
import getBookingByUserId from "../actions/getBookingByUserId";
import { FaSackDollar } from "react-icons/fa6";
import deleteBookingById from "../actions/deleteBooking";
import CancelBooking from "../components/CancelBooking";

interface PropCard {
  booking: {
    $id: string;
    room_id: string;
    ckeckin: string;
    ckeckout: string;
  };
  room: {
    $id: string;
    title: string;
    img: any;
    price: string;
    address: string;
  };
}

const Card = (booking: PropCard) => {
  return (
    <div className="bg-white flex flex-col   md:flex-row shadow-lg p-2 items-center  hover:scale-105 transition-transform duration-300 ease-in-out transform justify-around">
      <div className="flex flex-col md:flex-row items-center space-y-2">
        <img src={booking.room.img} className="size-32 rounded-full" />
        <div className="flex flex-col px-4 space-y-3">
          <h2 className="text-lg font-bold text-slate-600 text-center w-full">
            {booking.room.title}
          </h2>

          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" />
            <span className="text-slate-600">{booking.room.address}</span>
          </div>
          <div className="flex items-center">
            <FaSackDollar className="text-green-500 mr-2" />
            <span className="text-slate-600">
              {booking.room.price}$ in hour
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col  space-y-3 justify-start md:justify-end text-slate-500 mt-3">
        <p>Checkin: {new Date(booking.booking.ckeckin).toLocaleString()}</p>
        <p>Checkout: {new Date(booking.booking.ckeckout).toLocaleString()}</p>
      </div>
      <div>
        <CancelBooking id={booking.booking.$id} />
      </div>
    </div>
  );
};

export default async function Bookings() {
  const info = await getBookingByUserId();

  return (
    <>
      <div className="pt-5 pl-10 text-slate-500 text-3xl font-bold">
        Bookings
      </div>
      <div className="flex flex-col gap-3 p-10">
        {info?.map((booking) => (
          <Card {...booking} />
        ))}
      </div>
    </>
  );
}
