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
          <div>
            <h2 className="text-xl my-2">Lístky</h2>
            <ul>
              {cart.map((ticket) => (
                <TicketBlock key={ticket.id} {...ticket} modify={modify} />
              ))}
            </ul>
            <p className="flex justify-between border-2 rounded-md shadow-md py-2 px-4 mb-4 font-semibold">
              <span>Celková cena:</span>
              <span>
                {cart.reduce((acc, ticket) => {
                  return acc + ticket.price * ticket.quantity;
                }, 0)}{" "}
                CZK
              </span>
            </p>
            <button
              className="text-center w-full bg-lime-600 text-gray-100 font-semibold tracking-wider p-1 rounded-md shadow-md"
              onClick={() => setStage(2)}
            >
              Další krok
            </button>
          </div>
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
