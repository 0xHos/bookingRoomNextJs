import { getArticalById } from "@/app/models";
import { IArtical } from "@/app/models/artical";

export default async function Handler({ params }) {
  const articalId = params.slug[0];
  const artical: IArtical = await getArticalById(articalId);
  console.log("artical", artical);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-1/2">
          <img src={artical.image} alt={artical.title} className="size-96" />
          <span className="text-slate-700 text-2xl">{artical.author}</span>
          <br />
          <span className="text-slate-500">{artical.date.toString()}</span>

          <h1 className="text-2xl font-bold">{artical.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: artical.content }}></div>
        </div>
      </div>
    </>
  );
}
