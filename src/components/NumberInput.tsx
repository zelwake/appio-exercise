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
      <label className="relative flex flex-col pb-4">
        <span className="pl-1 text-sm">{`${label}${required && "*"}`}</span>
        <input
          className="border-2 rounded-md w-full pl-1 text-lg"
          type="number"
          name={name}
          value={value}
          onBlur={checkValid}
          onChange={onChange}
          required={required}
        />
        {error && (
          <p className="text-red-500 text-xs absolute bottom-0 left-1">
            {error}
          </p>
        )}
      </label>
    </>
  );
};

export default NumberInput;
