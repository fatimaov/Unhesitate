import DreamCard from "@/components/DreamCard";
import { getNightmares } from "@/lib/actions/dream.action";

export default async function Dreams() {
  const dreams = await getNightmares();

  return (
    <main className="flex justify-center mt-4 sm:mt-8 px-4 sm:px-6 overflow-x-hidden">
      <section className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap justify-center max-w-7xl w-full">
        {dreams.length === 0 && (
          <p className="text-gray-400 text-sm sm:text-base">No Nightmares yet. Create one!</p>
        )}

        {dreams.map((d: any) => (
          <DreamCard
            key={d._id}
            title={d.title}
            description={d.description}
            type={d.type}
            location={d.location}
            username={d.username}
            userImage={d.userImage}
            imageUrl={d.imageUrl}
          />
        ))}
      </section>
    </main>
  );
}
