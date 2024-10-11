import Link from "next/link";

interface PropRoomCard {
  id: string;
  img: string;
  title: string;
  address: string;
  availability: string;
  price: string;
}

export default function RoomCard(info: PropRoomCard) {
  return (
    <>
      <div className="flex shadow-md justify-between items-center  m-3 bg-white">
        <div className="flex">
          <img
            className="object-cover w-40 h-40"
            width={100}
            height={100}
            src={info.img}
            alt={info.title}
          />
          <div className="flex flex-col items-start space-y-4 pl-2">
            <h2 className="text-lg font-bold">{info.title}</h2>
            <p className="text-sm text-gray-600">Address: {info.address}</p>
            <p className="text-sm text-gray-600">
              Availability: {info.availability}
            </p>
            <h3 className=" font-bold text-green-500">Price: {info.price}</h3>
          </div>
        </div>
        <Link
          href={`/rooms/${info.id}`}
          className="px-5 py-2 bg-blue-700 text-white mx-5"
        >
          View Room
        </Link>
      </div>
    </>
  );
}
