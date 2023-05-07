import { BuyerProps } from "@/types";
import { Dispatch, SetStateAction } from "react";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

type FormProps = {
  name: string;
  email: string;
  phone: string;
  agree: boolean;
  setBuyerInfo: Dispatch<SetStateAction<BuyerProps>>;
  sendRequest: () => void;
};

const Form = ({
  name,
  email,
  phone,
  agree,
  setBuyerInfo,
  sendRequest,
}: FormProps) => {
  const validated = (): boolean => {
    // aby uživatel nemohl odeslat požadavek pokud všechno nevyplnil
    if (name.trim().length && email.trim().length && phone.length == 9 && agree)
      return false;
    return true;
  };

  return (
    <>
      <form className="border-2 rounded-md shadow-md py-2 px-4 mb-4 flex flex-col gap-2">
        <TextInput
          label="Celé jméno"
          name="name"
          type="text"
          value={name}
          onChange={(e) =>
            setBuyerInfo((prev) => ({ ...prev, name: e.target.value }))
          }
          required={true}
        />
        <TextInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) =>
            setBuyerInfo((prev) => ({ ...prev, email: e.target.value }))
          }
          required={true}
        />
        <NumberInput
          label="Telefonní číslo"
          name="name"
          value={phone}
          onChange={(e) =>
            setBuyerInfo((prev) => ({ ...prev, phone: e.target.value }))
          }
          required
        />
        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) =>
              setBuyerInfo((prev) => ({
                ...prev,
                agree: e.target.checked,
              }))
            }
            required
          />{" "}
          Souhlasím se vším*
        </label>
      </form>
      <button
        className="text-center w-full bg-lime-600 text-gray-100 font-semibold tracking-wider p-1 rounded-md shadow-md disabled:bg-gray-600"
        onClick={() => sendRequest()}
        disabled={validated()}
      >
        Odeslat
      </button>
    </>
  );
};

export default Form;
