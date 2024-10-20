"use client";
import { createRoom } from "@/app/actions/createRoom";
import { revalidatePath } from "next/cache";
import { permanentRedirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function AddRoom() {
  const [imageBase64, setImageBase64] = useState("");
  const handleFileChange = (event) => {
    console.log(event.currentTarget.files[0].type);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result;
      setImageBase64(base64);
    };
    reader.readAsDataURL(event.currentTarget.files[0]);
  };

  const router = useRouter();
  const [state, formAction] = useFormState(createRoom, {
    success: false,
    msg: "",
  });

  useEffect(() => {
    if (state.msg) {
      if (state.success) {
        toast.success(state.msg);
      } else {
        toast.error(state.msg);
      }
    }
    // return () => {};
  }, [state]);
  return (
    <form
      action={formAction}
      className="space-y-3 shadow-md bg-white p-6 mt-10 flex flex-col  items-center rounded-lg"
    >
      <h1 className="text-2xl text-gray-500 font-extrabold">Add Room</h1>
      <input type="hidden" value={imageBase64} name="imageBase64" />
      <div className="size-60 relative  -top-36">
        <div className="w-full ">
          {imageBase64 ? (
            <img
              className=" size-60 rounded-full"
              src={imageBase64}
              alt="Room Image"
            />
          ) : (
            <div className="size-60 rounded-full bg-slate-100"></div>
          )}
        </div>
        <input
          className="w-full h-full py-3 border-2 border-slate-500 p-2 absolute z-10 top-0 opacity-0 "
          type="file"
          name="image"
          placeholder="Room Image"
          onChange={handleFileChange}
          required
        />
      </div>
      <div className="w-full ">
        <label
          htmlFor="title"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            name="title"
            id="title"
            className="p-3 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Title"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Title
          </span>
        </label>
      </div>

      <div className="w-full ">
        <label
          htmlFor="address"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="text"
            name="address"
            id="address"
            className="p-3 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Address"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Address
          </span>
        </label>
      </div>
      <div className="w-full ">
        <label
          htmlFor="price"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="number"
            min={1}
            name="price"
            id="price"
            className="p-3 w-full  peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Price"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Price
          </span>
        </label>
      </div>

      <div className="w-full ">
        <label
          htmlFor="bed"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <input
            type="number"
            min={1}
            name="bed"
            id="bed"
            className="p-3 w-full  peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Bed Count"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Bed Count
          </span>
        </label>
      </div>
      <div className="w-full">
        <label className="text-gray-500">Bathroom </label>
        <select name="bathroom" id="" className="w-full bg-slate-100 p-3">
          <option value={"Yes"}>Yes</option>
          <option value={"No"}>No</option>
        </select>
      </div>
      <div className="w-full ">
        <label
          htmlFor="description"
          className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <textarea
            name="description"
            id="description"
            className="p-3 w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            placeholder="Description"
          />

          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Description
          </span>
        </label>
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="bg-primary hover:bg-secondry w-full py-3 text-white font-medium rounded-lg"
        >
          Create Room
        </button>
      </div>
    </form>
  );
}
