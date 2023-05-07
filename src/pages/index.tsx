import BuyElement from "@/components/BuyElement";
import FestivalBlock from "@/components/FestivalBlock";
import { FestivalInfo, FestivalInfoJSON } from "@/types";
import { GetServerSideProps } from "next/types";
import { useEffect, useState } from "react";

const Home = ({ festivals }: { festivals: FestivalInfoJSON[] }) => {
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <ul className="p-5">
        {festivals.map((fest) => (
          <li className="mb-10" key={fest.id}>
            <FestivalBlock key={fest.id} {...fest} />
            {selected == fest.id ? (
              <BuyElement tickets={fest.tickets} />
            ) : (
              <button
                className="text-center w-full bg-lime-500 text-gray-50 font-semibold tracking-wider p-1 rounded-md shadow-md "
                onClick={() => setSelected(fest.id)}
              >
                Koupit lístek
              </button>
            )}
          </li>
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
          id: 1234,
          name: "Základní",
          price: 12,
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 5678,
          name: "Rozšířená",
          price: 25,
          info: "Deleniti eum autem voluptatum temporibus, eaque beatae dicta cumque ipsam libero adipisci, blanditiis, optio fuga qui quos maiores numquam expedita explicabo ad.",
        },
        {
          id: 1598,
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
          id: 9681,
          name: "Základní",
          price: 75,
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 38576,
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
          id: 9785,
          name: "Základní",
          price: 5,
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 684351,
          name: "Rozšířená",
          price: 15,
          info: "Deleniti eum autem voluptatum temporibus, eaque beatae dicta cumque ipsam libero adipisci, blanditiis, optio fuga qui quos maiores numquam expedita explicabo ad.",
        },
        {
          id: 813857,
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
