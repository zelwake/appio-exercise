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
    <div>
      <h2>{name}</h2>
      <time>{parseDate(date)}</time>
      <p>{place}</p>
    </div>
  );
};

export default FestivalBlock;

function parseDate(date: string): string {
  return new Date(date).toLocaleDateString();
}
