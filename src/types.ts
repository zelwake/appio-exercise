export type TicketInfo = {
  id: number;
  name: string;
  price: number;
  info: string;
};

export type FestivalInfo = {
  id: number;
  name: string;
  place: string;
  date: Date;
  tickets: TicketInfo[];
};

export type FestivalInfoJSON = {
  id: number;
  name: string;
  place: string;
  date: string;
  tickets: TicketInfo[];
};

export type TicketBlockInfo = {
  name: string;
  price: number;
  info: string;
  quantity: number;
  id: number;
  modify: (id: number, change: number) => void;
};
