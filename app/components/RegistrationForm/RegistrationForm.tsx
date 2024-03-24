export default function RegistrationForm() {
  return (
    <form action="#">
      <label className="block text-base">
        <span className="text-gray-700">E-mail</span>
        <input
          className="block w-full mt-1 px-3.5 py-2.5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 outline-none text-sm form-input"
          placeholder="example@example.ru"
        />
      </label>
      <label className="block mt-4 text-base">
        <span className="text-gray-700">Пароль</span>
        <input
          className="block w-full mt-1 px-3.5 py-2.5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 outline-none text-sm form-input"
          placeholder="***************"
          type="password"
        />
      </label>
      <label className="block mt-4 text-base">
        <span className="text-gray-700">Повторите пароль</span>
        <input
          className="block w-full mt-1 px-3.5 py-2.5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 outline-none text-sm form-input"
          placeholder="***************"
          type="password"
        />
      </label>
      <div className="flex mt-5 text-sm">
        <label className="flex items-start">
          <input
            type="checkbox"
            className="text-blue-600 mt-1 form-checkbox focus:border-blue-400 focus:outline-none focus:shadow-outline-purple"
          />
          <p className="ml-2">
            Я соглашаюсь с&nbsp;
            <a
              href="/docs/privacy_policy.pdf"
              target="_blank"
              className="underline"
            >
              политикой обработки персональных данных
            </a>
          </p>
        </label>
      </div>
      <button className="block w-full mt-5 px-3.5 py-2.5 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-700 hover:bg-blue-700 outline-none">
        Создать аккаунт
      </button>
    </form>
  );
}
