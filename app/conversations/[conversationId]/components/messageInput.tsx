"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        autoComplete={id}
        type={type}
        {...register(id, { required: required })}
        placeholder={placeholder}
        className="
        text-black
        font-light
        py-2
        px-4
        bg-neutral-100
        w-full
        rounded-full
        focus:outline-none
        "
      />
    </div>
  );
};

export default MessageInput;