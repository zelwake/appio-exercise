import { TicketInfo } from "@/types";
import { useState } from "react";
import TicketBlock from "./TicketBlock";

const BuyElement = ({ tickets }: { tickets: TicketInfo[] }) => {
  const [stage, setStage] = useState<number>(1);
  const [cart, setCart] = useState<(TicketInfo & { quantity: number })[]>(
    tickets.map((ticket) => ({
      ...ticket,
      quantity: 0,
    }))
  );

  const modify = (id: number, change: number) => {
    const updatedTicketList = cart.map((ticket) =>
      ticket.id === id
        ? { ...ticket, quantity: ticket.quantity + change }
        : ticket
    );
    setCart(updatedTicketList);
  };

  const showStage = () => {
    switch (stage) {
      case 1:
        return (
          <ul>
            {cart.map((ticket) => (
              <TicketBlock key={ticket.id} {...ticket} modify={modify} />
            ))}
          </ul>
        );

      default:
        return <p>Jste mimo</p>;
    }
  };

  return showStage();
};

export default BuyElement;
