import { InputHTMLAttributes } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: Path<T>;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

export const Input = <T extends FieldValues>({
  label,
  name,
  placeholder,
  errors,
  register,
  ...inputProps
}: InputProps<T>) => (
  <div>
    <label className="mb-2 mt-6 block text-sm font-medium text-cyan-700 dark:text-white">{label}</label>

    <input
      {...inputProps}
      {...register(name)}
      placeholder={placeholder}
      className="focus:cyan-700 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-cyan-700"
    />
    {errors[name] && <p className="text-red-700">{errors[name]?.message?.toString()}</p>}
  </div>
);
