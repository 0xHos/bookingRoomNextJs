export default function Headeing({ title }: { title: string }) {
  return (
    <div className="border-b-2 mb-20">
      <h2 className="font-bold text-2xl pb-2 text-slate-600">{title}</h2>
    </div>
  );
}
