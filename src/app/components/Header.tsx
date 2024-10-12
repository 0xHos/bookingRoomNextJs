"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { BiDoorOpen, BiLogIn, BiUser } from "react-icons/bi";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import { checkIsHaveAuth } from "../store/authSlice";

export default function Header() {
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  const dispatch = useDispatch();

  dispatch(checkIsHaveAuth());
  console.log("header load");
  return (
    <>
      <header className="bg-slate-200 flex flex-col md:flex-row items-center p-2 justify-between">
        <section className="flex gap-6 font-bold ml-4 ">
          <Image width="70" src={logo} alt={""} className="inline" />
          <section className="flex gap-6 font-bold ml-4 items-center">
            <Link
              className="hover:bg-black hover:text-white px-7 py-2"
              href={"/"}
            >
              Rooms
            </Link>
            {isAuth && (
              <>
                <Link
                  className="hover:bg-black hover:text-white px-7 py-2"
                  href={"/bookings"}
                >
                  Booking
                </Link>
                <Link
                  className="hover:bg-black hover:text-white px-7 py-2"
                  href={"/room/add"}
                >
                  Add Room
                </Link>
              </>
            )}
          </section>
        </section>

        <section className="flex flex-col md:flex-row gap-6 font-bold mr-2">
          {!isAuth && (
            <>
              <Link href={"/login"} className="flex gap-2 items-center">
                <BiLogIn /> Login{" "}
              </Link>
              <Link href={"/signup"} className="flex gap-2 items-center">
                <BiUser /> Register{" "}
              </Link>
            </>
          )}
          {isAuth && (
            <>
              <Link href={"/rooms/my"} className="flex gap-2 items-center">
                <BiDoorOpen /> My Rooms{" "}
              </Link>
              <Logout />
            </>
          )}
        </section>
      </header>
    </>
  );
}
