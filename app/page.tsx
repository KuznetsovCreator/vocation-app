import Link from "next/link";
import AuthForm from "./components/Forms/AuthForm";
import FormSection from "./components/FormSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-start sm:justify-center items-center min-h-screen p-6 bg-gray-100">
      <FormSection>
        <AuthForm />
      </FormSection>
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
    </div>
  );
}
