import Link from "next/link";
import AuthForm from "./components/Form/AuthForm";

export default function Home() {
  return (
    <main className="flex flex-col justify-start sm:justify-center items-center min-h-screen p-6 bg-gray-100">
      <div className="relative flex w-full sm:w-96 h-full mx-auto bg-white rounded-lg">
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
          <AuthForm />
        </div>
      </div>
      <div className="mt-8 w-full sm:w-96 flex flex-row justify-between items-center">
        <Link
          className="text-sm text-center font-medium text-blue-600 hover:underline outline-none"
          href="/reset"
        >
          Забыли пароль?
        </Link>
        <Link
          className="text-sm text-center font-medium text-blue-600 hover:underline outline-none"
          href="/registration"
        >
          Создать аккаунт
        </Link>
      </div>
    </main>
  );
}
