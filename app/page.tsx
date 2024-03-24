import Link from "next/link";
import AuthForm from "./components/AuthForm/AuthForm";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex h-full w-full sm:w-fit mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex w-full items-center justify-center p-6 sm:p-8 md:p-12">
          <div className="w-full sm:w-80">
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
            <hr className="mt-6 mb-4 md:mt-8 md:mb-6" />
            <div className="flex flex-row justify-between items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}
