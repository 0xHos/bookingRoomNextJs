"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { BiDoorOpen, BiLogIn, BiUser } from "react-icons/bi";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import { checkIsHaveAuth } from "../store/authSlice";
import { Oxanium } from "next/font/google";
import { useState } from "react";

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

const font = Oxanium({
  weight: "700",
  subsets: ["latin"],
});

export default function Header() {
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  dispatch(checkIsHaveAuth());
  console.log("header load");

  return (
    <header className={`bg-white ${font.className}`}>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href={"/"}>
          <span className="sr-only">Home</span>
          <svg
            id="logo-38"
            width="78"
            height="32"
            viewBox="0 0 78 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
              className="ccustom"
              fill="#FF7A00"
            ></path>{" "}
            <path
              d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
              className="ccompli1"
              fill="#FF9736"
            ></path>{" "}
            <path
              d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
              className="ccompli2"
              fill="#FFBC7D"
            ></path>{" "}
          </svg>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                {isAuth && (
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/bookings"
                  >
                    BOKINGS{" "}
                  </Link>
                )}
              </li>
              <li>
                {isAuth && (
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/room/add"
                  >
                    ADD ROOM{" "}
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {isAuth ? (
                <>
                  <Link
                    href={"/rooms/my"}
                    className=" gap-2 items-center text-gray-500 transition hover:text-gray-500/75 hidden md:flex"
                  >
                    <BiDoorOpen /> My Rooms{" "}
                  </Link>

                  <div className="hidden md:flex">
                    <Logout />
                  </div>
                </>
              ) : (
                <>
                  <Link
                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondry"
                    href="/login"
                  >
                    Login
                  </Link>

                  <Link
                    className="hidden md:block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-secondry "
                    href="/signup"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`relative  md:hidden`}>
        {/* Menu in mobile */}
        {isMenuOpen && (
          <div
            className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2 flex flex-col space-y-2 px-5">
              {isAuth ? (
                <>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/bookings"
                  >
                    BOKINGS{" "}
                  </Link>
                  <hr />
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/room/add"
                  >
                    ADD ROOM{" "}
                  </Link>
                  <hr />
                  <Link
                    href={"/rooms/my"}
                    className="flex gap-2 items-center text-gray-500 transition hover:text-gray-500/75"
                  >
                    <BiDoorOpen /> My Rooms{" "}
                  </Link>
                  <hr />
                  <Logout />
                </>
              ) : (
                <Link
                  className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-secondry block"
                  href="/signup"
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
