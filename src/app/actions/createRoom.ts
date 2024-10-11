// "use server";
import API from "../services/api";
import { IRoom } from "../types/type";
export async function createRoom(prevState, formData) {
  const jwt: string = localStorage.getItem("jwtappwrite") || "";
  const user_id: string = localStorage.getItem("userIdappwrite") || "";

  const title: string = formData.get("title");
  const description: string = formData.get("description");
  const address: string = formData.get("address");
  const availability: string = formData.get("availability");
  const price: string = formData.get("price");
  const room: IRoom = {
    user_id,
    title,
    description,
    address,
    availability,
    price,
  };

  const auth = await API.createRoom(jwt, room);
  return {
    success: "Login success",
    auth: auth,
  };
}
