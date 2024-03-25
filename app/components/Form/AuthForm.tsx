import Button from "../shared/Button";
import Input from "../shared/Input";

export default function AuthForm() {
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
      <Button text="Войти" />
    </form>
  );
}
