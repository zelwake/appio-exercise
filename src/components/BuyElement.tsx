import { BuyerProps, TicketInfo } from "@/types";
import { useState } from "react";
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

  const validated = (): boolean => {
    // aby uživatel nemohl odeslat požadavek pokud všechno nevyplnil
    if (
      (buyerInfo.name.trim().length &&
        buyerInfo.email.trim().length &&
        buyerInfo.phone.length == 9) ||
      buyerInfo.agree
    )
      return false;
    return true;
  };

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
            <button onClick={() => setStage(2)}>Další krok</button>
          </>
        );

      case 2:
        return (
          <>
            <p onClick={() => setStage(1)}>&larr; Zpět</p>
            <p>Vaše údaje</p>
            <form>
              <label>
                Celé jméno*
                <input
                  type="text"
                  name="name"
                  value={buyerInfo.name}
                  onChange={(e) =>
                    setBuyerInfo((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
              </label>
              <label>
                Email*
                <input
                  type="email"
                  name="email"
                  value={buyerInfo.email}
                  onChange={(e) =>
                    setBuyerInfo((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </label>
              <label>
                Telefonní číslo*
                <input
                  type="number"
                  name="name"
                  value={buyerInfo.phone}
                  onChange={(e) =>
                    setBuyerInfo((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                />
              </label>
              <input
                type="checkbox"
                checked={buyerInfo.agree}
                onChange={(e) =>
                  setBuyerInfo((prev) => ({ ...prev, agree: e.target.checked }))
                }
                required
              />{" "}
              Souhlasím se vším*
            </form>
            <button onClick={() => sendRequest()} disabled={validated()}>
              Odeslat
            </button>
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

  return showStage();
};

export default BuyElement;
