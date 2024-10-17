"use client";

import deleteBookingById from "../actions/deleteBooking";

export default function CancelBooking({ id }) {
  const cancel = async () => {
    await deleteBookingById(id);
    // location.reload();
  };
  return (
    <>
      <button
        onClick={cancel}
        className="w-full border-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white p-3 rounded-md my-4"
      >
        Cancel Booking
      </button>
    </>
  );
}
