"use client";

import { IArtical } from "@/app/models/artical";
import stripHtmlTags from "@/app/utils/stripHtml";

export default function ArticalCard({ _id, title, image, content }: IArtical) {
  return (
    <div
      className="bg-white w-1/4 flex flex-col text-center shadow-lg rounded-md hover:cursor-pointer"
      onClick={() => {
        window.location.href = `/artical/${_id}`;
      }}
    >
      {" "}
      <img src={image} alt={title} className="size-96 object-cover" />
      <h2 className="text-2xl font-bold border-b-2 border-slate-400">
        {title}
      </h2>
      <p>{stripHtmlTags(content).slice(0, 200)}....</p>
      <hr />
    </div>
  );
}
