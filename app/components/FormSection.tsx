import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  isBack?: boolean;
};

export default function FormSection({ children, isBack = false }: Props) {
  return (
    <div className="relative flex w-full sm:w-96 h-full mx-auto bg-white rounded-lg">
      {isBack && (
        <Link
          href="/"
          className="absolute p-2 top-5 sm:top-9 -left-5 rounded-full bg-white border-4 border-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 stroke-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
      )}
      <div className="flex-1 flex-col items-center justify-center p-6 sm:p-10">
        <a
          className="flex justify-center items-center mb-10"
          href="https://prizvanie-spb.ru"
        >
          <img
            className="w-48"
            src="/logo.svg"
            alt="Логотип СПБ РОО МФ Призвание"
          />
        </a>
        {children}
      </div>
    </div>
  );
}
