import { db } from "@/db";

const Page = async () => {
  const workshops = await db.query.workshops.findMany();

  return (
    <div>
      {workshops.map((w) => (
        <div key={w.id}>{w.name}</div>
      ))}
    </div>
  );
};

export default Page;
