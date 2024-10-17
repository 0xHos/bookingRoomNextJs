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
      <header className="bg-white flex flex-col md:flex-row items-center p-2 py-5 justify-between fixed w-full z-50 shadow-sm text-blue-700 ">
        <section className="flex gap-6 font-bold ml-4 ">
          {/* <Image width="70" src={logo} alt={""} className="inline" /> */}
          {/* <h1>B</h1> */}
          <section className="flex gap-6 font-bold ml-4 items-center">
            <Link href={"/"}>
              <h1 className="text-3xl text-blue-700 rounded-lg border-2 border-blue-700 p-2">
                B
              </h1>
            </Link>

            {/* <Link
              className="hover:bg-black hover:text-white px-7 py-2"
              href={"/"}
            >
              Rooms
            </Link> */}
            {isAuth && (
              <>
                <Link
                  className="hover:bg-blue-700 hover:text-white px-7 py-2"
                  href={"/bookings"}
                >
                  Booking
                </Link>
                <Link
                  className="hover:bg-blue-700 hover:text-white px-7 py-2"
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
              <Link
                href={"/login"}
                className="flex gap-2 items-center border-2 border-blue-700 p-2 text-blue-700 px-4"
              >
                <BiLogIn /> Login{" "}
              </Link>
              <Link
                href={"/signup"}
                className="flex gap-2 items-center  bg-blue-700 p-2 text-white px-4"
              >
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
