"use client";
import { IoIosCloseCircle } from "react-icons/io";

import { useRouter } from "next/navigation";

export default function CloseModal() {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {
          router.back();
        }}
      >
        <IoIosCloseCircle color="red" size={30} />
      </button>
    </>
  );
}
