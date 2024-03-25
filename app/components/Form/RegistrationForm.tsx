import Button from "../shared/Button";
import Input from "../shared/Input";

export default function RegistrationForm() {
  return (
    <form className="flex flex-col gap-y-5">
      <Input
        label="E-mail"
        placeholder="ivanov@example.ru"
        name="identifier"
        type="email"
      />
      <Input
        label="Пароль"
        placeholder="***************"
        name="password"
        type="password"
      />
      <Input
        label="Повторите пароль"
        placeholder="***************"
        name="repeat-password"
        type="password"
      />
      <Button text="Продолжить" />
      <div className="flex text-center justify-center">
        <p className="text-sm text-gray-400">
          Нажимая "Продолжить", вы соглашаетесь с&nbsp;
          <a
            href="/docs/privacy_policy.pdf"
            target="_blank"
            className="underline"
          >
            политикой обработки данных
          </a>
        </p>
      </div>
    </form>
  );
}
