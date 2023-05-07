import { TextInputProps } from "@/types";
import { useState } from "react";

const TextInput = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
}: TextInputProps) => {
  const [error, setError] = useState<string>("");

  const checkValid = () => {
    if (!value.trim().length) setError("Invalid input");
    else setError("");
  };

  return (
    <>
      <label>
        {`${label}${required && "*"}`}
        <input
          type={type}
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

export default TextInput;
