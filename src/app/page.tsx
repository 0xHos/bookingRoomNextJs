import ArticalCard from "./components/home/Card";
import { getLastArticals } from "./models";
import { IArtical } from "./models/artical";
import SwiperCompon from "./components/home/SwiperCompon";

export default async function handler() {
  const lastArticals = await getLastArticals();
  const articles = await getLastArticals();

  return (
    <>
      <SwiperCompon articles={articles} />
      <div className="p-10 flex  gap-5 flex-wrap  justify-around ">
        {lastArticals.map((artical: IArtical) => (
          <ArticalCard
            key={artical._id}
            _id={artical._id}
            title={artical.title}
            content={artical.content}
            tag={artical.tag}
            author={artical.author}
            image={artical.image}
          />
        ))}
      </div>
    </>
  );
}
