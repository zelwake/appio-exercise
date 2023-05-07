export type TicketInfo = {
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
