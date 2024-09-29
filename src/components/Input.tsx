import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};
