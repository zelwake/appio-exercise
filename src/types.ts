import { ChangeEventHandler } from "react";

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

export type BuyerProps = {
  name: string;
  email: string;
  phone: string;
  agree: boolean;
};

type InputProps = {
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
};

export type TextInputProps = InputProps & {
  type: "text" | "email";
  value: string;
};

export type NumberInputProps = InputProps & {
  value: string;
};
