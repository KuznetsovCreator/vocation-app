import Button from "../shared/Button";
import Input from "../shared/Input";

export default function ResetForm() {
  return (
    <form className="flex flex-col gap-y-5">
      <Input
        label="E-mail"
        placeholder="ivanov@example.ru"
        name="identifier"
        type="email"
      />
      <Button text="Сбросить пароль" />
    </form>
  );
}
