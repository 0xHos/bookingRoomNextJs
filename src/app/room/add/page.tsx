"use client";
import { createRoom } from "@/app/actions/createRoom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function AddRoom() {
  const router = useRouter();
  const [state, formAction] = useFormState(createRoom, {
    success: false,
    msg: "",
  });

  useEffect(() => {
    console.log("state", state);
    if (state.msg) {
      if (state.success) {
        toast.success(state.msg);
        // router.push("/rooms/my");
      } else {
        toast.error(state.msg);
      }
    }
    // return () => {};
  }, [state]);
  return (
    <form action={formAction} className="space-y-3 shadow-md bg-white p-6">
      <h1 className="text-2xl font-extrabold">Add Room</h1>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="url"
          name="image"
          placeholder="Room Image"
          required
        />
      </div>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="text"
          name="title"
          placeholder="Room Title"
          required
        />
      </div>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="text"
          name="description"
          placeholder="Description"
          required
        />
      </div>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="text"
          name="address"
          placeholder="address"
          required
        />
      </div>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="text"
          name="availability"
          placeholder="availability"
          required
        />
      </div>
      <div className="w-full">
        <input
          className="w-full py-3 border-2 border-slate-500 p-2 "
          type="number"
          name="price"
          placeholder="price"
          required
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
