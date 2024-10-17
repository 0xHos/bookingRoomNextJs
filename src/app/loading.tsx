"use client";
import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
      <div className="h-screen w-screen flex  justify-center">
        <MoonLoader size={90} color="#115f9f" />
      </div>
    </>
  );
}
