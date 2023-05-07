import { TicketBlockInfo } from "@/types";
import { useEffect, useState } from "react";

const TicketBlock = ({
  id,
  name,
  price,
  info,
  quantity,
  modify,
}: TicketBlockInfo) => {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    quantity < 1 ? setEnabled(true) : setEnabled(false);
  }, [quantity]);

  return (
    <li className="border-2 rounded-md shadow-md py-2 px-4 mb-4 relative">
      <div className="flex justify-between mb-2">
        <h4 className="text-lg">{name}</h4>
        <p className="absolute right-24">{price} CZK</p>
        <div className="grid grid-cols-3 font-bold text-center">
          <button
            className="border-2 w-6 rounded-md bg-gray-100"
            onClick={() => modify(id, -1)}
            disabled={enabled}
          >
            -
          </button>
          <p className="border-2 w-6 rounded-md">{quantity}</p>
          <button
            className="border-2 w-6 rounded-md bg-gray-100"
            onClick={() => modify(id, 1)}
          >
            +
          </button>
        </div>
      </div>
      <p>{info}</p>
      {quantity > 0 && (
        <>
          <div className="h-0.5 my-3 border-t-2 border-dotted border-t-lime-500"></div>
          <p className="flex justify-between">
            <span>Celková cena:</span>
            <span>{quantity * price} CZK</span>
          </p>
        </>
      )}
    </li>
  );
};

export default TicketBlock;
