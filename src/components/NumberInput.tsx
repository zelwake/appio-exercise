import { NumberInputProps } from "@/types";
import { useState } from "react";

const NumberInput = ({
  label,
  name,
  value,
  onChange,
  required,
}: NumberInputProps) => {
  const [error, setError] = useState<string>("");

  const checkValid = () => {
    if (value.toString().length != 9) setError("Invalid input");
    else setError("");
  };

  return (
    <>
      <label>
        {`${label}${required && "*"}`}
        <input
          type="number"
          name={name}
          value={value}
          onBlur={checkValid}
          onChange={onChange}
          required={required}
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </label>
    </>
  );
};

export default NumberInput;
