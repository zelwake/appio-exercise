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
      <p>Vaše údaje</p>
      <form>
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
      <button onClick={() => sendRequest()} disabled={validated()}>
        Odeslat
      </button>
    </>
  );
};

export default Form;
