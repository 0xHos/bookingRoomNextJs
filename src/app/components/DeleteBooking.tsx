"use client";

import { deleteRoomById } from "../actions/deleteBooking";

export default function DeleteRoom({ id }) {
  const cancel = async () => {
    await deleteRoomById(id);
    // location.reload();
  };
  return (
    <>
      <button
        onClick={cancel}
        className="w-full border-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white p-3 rounded-md my-4"
      >
        Delete Room
      </button>
    </>
  );
}
