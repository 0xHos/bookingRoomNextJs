"use client";
import { useFormState } from "react-dom";
import bookings from "../actions/booking";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function CreateBooking({ room_id }: { room_id: string }) {
  const initialState = { success: "", msg: "" };

  const [state, formAction] = useFormState(bookings, initialState);

  useEffect(() => {
    if (state.msg) {
      if (state.success) {
        toast.success(state.msg);
      } else {
        toast.error(state.msg);
      }
    }
  }, [state]);
  return (
    <form action={formAction}>
      <input type="hidden" name="room_id" value={room_id} />
      <section className="mt-9">
        <h2 className="font-medium text-2xl text-slate-500">
          Booking This Room
        </h2>
        <div className="flex w-full mt-6 gap-10">
          <section className="w-1/2">
            <label htmlFor="date">Check in date</label>
            <br />
            <input
              type="date"
              id="date"
              name="ckin_date"
              className="w-full p-3"
              required
            />
          </section>
          <section className="w-1/2">
            <label htmlFor="time">Check in time</label>
            <br />
            <input
              type="time"
              id="time"
              name="ckin_time"
              className="w-full p-3"
              required
            />
          </section>
        </div>

        <div className="flex w-full mt-6 gap-10">
          <section className="w-1/2">
            <label htmlFor="date">Check out date</label>
            <br />
            <input
              type="date"
              id="date"
              name="ckout_date"
              className="w-full p-3"
              required
            />
          </section>
          <section className="w-1/2">
            <label htmlFor="time">Check out time</label>
            <br />
            <input
              type="time"
              id="time"
              name="ckout_time"
              className="w-full p-3"
              required
            />
          </section>
        </div>
        <button className="w-full border-2 text-primary border-primary hover:bg-primary hover:text-white p-3 rounded-md my-8 ">
          Book Now
        </button>
      </section>
    </form>
  );
}
