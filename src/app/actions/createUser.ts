"use server";
import API from "../services/api";

export default async function createUser(prevState, formData) {
  const email: string = formData.get("email");
  const name: string = formData.get("name");
  const password: string = formData.get("password");
  const auth = await API.register(name, email, password);
  console.log(auth);
  if (auth?.error) {
    return {
      success: false,
      msg: auth?.error,
    };
  }
  return {
    success: true,
    msg: "done create user",
  };
}
