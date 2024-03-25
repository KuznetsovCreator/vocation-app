import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...props }: Props) {
  return (
    <button
      {...props}
      className="block w-full px-3.5 py-2.5 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-700 hover:bg-blue-700 outline-none"
    >
      {text}
    </button>
  );
}
