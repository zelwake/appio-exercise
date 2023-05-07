import FestivalBlock from "@/components/FestivalBlock";
import { FestivalInfo, FestivalInfoJSON, TicketInfo } from "@/types";
import { GetServerSideProps } from "next/types";
import { useEffect, useState } from "react";

const Home = ({ festivals }: { festivals: FestivalInfoJSON[] }) => {
  const [selected, setSelected] = useState<number>(0);
  const [tickets, setTickets] = useState<TicketInfo[]>([]);

  const select = (id: number) => {
    setSelected(id);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <>
      <h1>Tickets</h1>
      <ul>
        {festivals.map((fest) => (
          <FestivalBlock key={fest.id} {...fest} select={select} />
        ))}
      </ul>
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // some database query to get all the festival info

  const festivalList: FestivalInfo[] = [
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

  return {
    props: { festivals: JSON.parse(JSON.stringify(festivalList)) },
  };
};
