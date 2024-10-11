"use client";
import { createRoom } from "@/app/actions/createRoom";
import { useFormState } from "react-dom";

export default function AddRoom() {
  const [, formAction] = useFormState(createRoom, {});
  return (
    <form action={formAction} className="space-y-3 shadow-md bg-white p-6">
      <h1 className="text-2xl font-extrabold">Add Room</h1>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="text"
          name="title"
          placeholder="Room Title"
        />
      </div>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="text"
          name="description"
          placeholder="Description"
        />
      </div>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="text"
          name="address"
          placeholder="address"
        />
      </div>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="text"
          name="availability"
          placeholder="availability"
        />
      </div>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="number"
          name="price"
          placeholder="price"
        />
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="bg-blue-600 w-full py-3 text-white font-medium"
        >
          Create Room
        </button>
      </div>
    </form>
  );
}
