interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: Props) {
  return (
    <label className="block text-base">
      <span className="text-gray-700">{label}</span>
      <input
        {...props}
        className="block w-full mt-1 px-3.5 py-2.5 rounded-md shadow-sm border border-gray-300 placeholder:text-gray-400 focus:border-blue-600 outline-none text-sm form-input"
      />
    </label>
  );
}
