export default function ResetForm() {
  return (
    <form action="#">
      <label className="block text-base">
        <span className="text-gray-700">E-mail</span>
        <input
          className="block w-full mt-1 px-3.5 py-2.5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 outline-none text-sm form-input"
          placeholder="example@example.ru"
        />
      </label>
      <button className="block w-full mt-5 px-3.5 py-2.5 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-700 hover:bg-blue-700 outline-none">
        Сбросить пароль
      </button>
    </form>
  );
}
