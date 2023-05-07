const festivalList = async () => {
  // some database query to get all the festival info

  const festivals = [
    {
      id: 1,
      name: "Dobrej",
      place: "V poli 12",
      date: new Date(),
      tickets: [
        {
          name: "Základní",
          price: 12,
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          name: "Rozšířená",
          price: 25,
          info: "Deleniti eum autem voluptatum temporibus, eaque beatae dicta cumque ipsam libero adipisci, blanditiis, optio fuga qui quos maiores numquam expedita explicabo ad.",
        },
        {
          name: "Backstage příplatek",
          price: 90,
          info: "Můžeš do backstage.",
        },
      ],
    },
    {
      id: 2,
      name: "Blbej zvuk",
      place: "Kastrolní 17",
      date: new Date(),
      tickets: [
        {
          name: "Základní",
          price: 75,
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          name: "Rozšířená",
          price: 325,
          info: "Deleniti eum autem voluptatum temporibus, eaque beatae dicta cumque ipsam libero adipisci, blanditiis, optio fuga qui quos maiores numquam expedita explicabo ad.",
        },
      ],
    },
    {
      id: 3,
      name: "B0mb4",
      place: "Budoucí výkop 188/9",
      date: new Date(),
      tickets: [
        {
          name: "Základní",
          price: 5,
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          name: "Rozšířená",
          price: 15,
          info: "Deleniti eum autem voluptatum temporibus, eaque beatae dicta cumque ipsam libero adipisci, blanditiis, optio fuga qui quos maiores numquam expedita explicabo ad.",
        },
        {
          name: "Kotel",
          price: 85,
          info: "Deleniti eum autem voluptatum temporibus, eaque beatae dicta cumque ipsam libero adipisci, blanditiis, optio fuga qui quos maiores numquam expedita explicabo ad.",
        },
      ],
    },
  ];

  return { festivals };
};

const Home = async () => {
  const festivals = await festivalList();
  return (
    <>
      <h1>Tickets</h1>
      {festivals.festivals.map((fest) => (
        <p key={fest.id}>{fest.name}</p>
      ))}
    </>
  );
};
export default Home;
