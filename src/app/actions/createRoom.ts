"use server";
import { cookies } from "next/headers";
import API from "../services/api";
import { IRoom } from "../types/type";

export async function createRoom(prevState, formData) {
  const jwt: string = cookies().get("appwrite-session")?.value || "";
  const user_id: string = cookies().get("appwrite-user_id")?.value || "";

  const title: string = formData.get("title");
  const description: string = formData.get("description");
  const address: string = formData.get("address");
  const availability: string = formData.get("availability");
  const price: string = formData.get("price");
  const imageBase: any = formData.get("imageBase64");
  const bed: string = formData.get("bed");
  const bathroom: string = formData.get("bathroom");
  const room: IRoom = {
    user_id,
    title,
    description,
    address,
    availability,
    price,
    img: imageBase,
    bathroom,
    bed,
  };

  console.log(room);
  const areRoomCreated = await API.createRoom(jwt, room);
  return {
    success: areRoomCreated.success,
    msg: areRoomCreated.msg,
  };
}
