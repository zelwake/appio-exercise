import Image from "next/image";

const FestivalBlock = ({
  id,
  name,
  date,
  place,
}: {
  id: number;
  name: string;
  date: string;
  place: string;
}) => {
  return (
    <div className="border-2 py-2 px-4 rounded-md shadow-md mb-3 relative">
      <h2 className="text-2xl mb-2">{name}</h2>
      <time className="text-gray-600">{parseDate(date)}</time>
      <p className="text-sm text-gray-600">{place}</p>
      <div className="w-2/5 md:w-1/6 absolute right-2 top-1.5">
        <Image
          src="/Hellfest-Metal-Festival.webp"
          width={300}
          height={300}
          alt="Festival logo"
        />
      </div>
    </div>
  );
};

export default FestivalBlock;

function parseDate(date: string): string {
  return new Date(date).toLocaleDateString();
}
