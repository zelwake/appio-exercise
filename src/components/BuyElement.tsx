import { BuyerProps, TicketInfo } from "@/types";
import { useState } from "react";
import Form from "./Form";
import StageBar from "./StageBar";
import TicketBlock from "./TicketBlock";

const BuyElement = ({ tickets }: { tickets: TicketInfo[] }) => {
  function initCart():
    | (TicketInfo & { quantity: number })[]
    | (() => (TicketInfo & { quantity: number })[]) {
    return tickets.map((ticket) => ({
      ...ticket,
      quantity: 0,
    }));
  }

  const [stage, setStage] = useState<number>(1);
  const [cart, setCart] = useState<(TicketInfo & { quantity: number })[]>(
    initCart()
  );
  const [buyerInfo, setBuyerInfo] = useState<BuyerProps>({
    name: "",
    email: "",
    phone: "",
    agree: false,
  });

  const modify = (id: number, change: number) => {
    const updatedTicketList = cart.map((ticket) =>
      ticket.id === id
        ? { ...ticket, quantity: ticket.quantity + change }
        : ticket
    );
    setCart(updatedTicketList);
  };

  const sendRequest = async () => {
    const body = {
      buyerInfo,
      cart,
    };

    const buy = await fetch("/api/buy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (buy.status == 200) {
      const response = await buy.json();
      console.log(response);
      setStage(3);
    } else alert("chyba");
  };

  const reset = () => {
    setStage(1);
    setCart(initCart());
  };

  const showStage = (): JSX.Element => {
    switch (stage) {
      case 1:
        return (
          <>
            <ul>
              {cart.map((ticket) => (
                <TicketBlock key={ticket.id} {...ticket} modify={modify} />
              ))}
            </ul>
            <p>
              Celková cena:{" "}
              {cart.reduce((acc, ticket) => {
                return acc + ticket.price * ticket.quantity;
              }, 0)}{" "}
              CZK
            </p>
            <button onClick={() => setStage(2)}>Další krok</button>
          </>
        );

      case 2:
        return (
          <>
            <p onClick={() => setStage(1)}>&larr; Zpět</p>
            <Form
              {...buyerInfo}
              sendRequest={sendRequest}
              setBuyerInfo={setBuyerInfo}
            />
          </>
        );

      case 3:
        return (
          <div>
            <h3>Děkujeme</h3>
            <p>Děkujeme za Vaši objednávku. Brzy Vás budeme kontaktovat!</p>
            <button onClick={reset}>Objednat další</button>
          </div>
        );
      default:
        return <p>Jste mimo prostor a čas</p>;
    }
  };

  return (
    <>
      <StageBar stage={stage} />
      {showStage()}
    </>
  );
};

export default BuyElement;
