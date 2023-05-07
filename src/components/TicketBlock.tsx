import { TicketBlockInfo } from "@/types";

const TicketBlock = ({
  id,
  name,
  price,
  info,
  quantity,
  modify,
}: TicketBlockInfo) => {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{price}</p>
        <div>
          {quantity > 0 ? (
            <button onClick={() => modify(id, -1)}>-</button>
          ) : (
            <button disabled>-</button>
          )}
          <p>{quantity}</p>
          <button onClick={() => modify(id, 1)}>+</button>
        </div>
      </div>
      <p>{info}</p>
    </li>
  );
};

export default TicketBlock;
