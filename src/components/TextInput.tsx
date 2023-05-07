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
      <label className="relative flex flex-col pb-4">
        <span className="pl-1 text-sm">{`${label}${required && "*"}`}</span>
        <input
          className="border-2 rounded-md w-full pl-1 text-lg"
          type={type}
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

export default TextInput;
