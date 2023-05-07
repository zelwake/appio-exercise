const FestivalBlock = ({
  id,
  name,
  date,
  place,
  select,
}: {
  id: number;
  name: string;
  date: string;
  place: string;
  select: (id: number) => void;
}) => {
  return (
    <li onClick={() => select(id)}>
      <h2>{name}</h2>
      <time>{parseDate(date)}</time>
      <p>{place}</p>
    </li>
  );
};

export default FestivalBlock;

function parseDate(date: string): string {
  return new Date(date).toLocaleDateString();
}
