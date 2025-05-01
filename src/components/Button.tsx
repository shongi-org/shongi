import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'block';
  variant?: 'primary' | 'secondary' | 'transparent';
  type: 'button' | 'submit';
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({
  size = 'medium',
  variant = 'primary',
  type,
  icon,
  children = '',
  className,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4',
    block: 'w-full py-2 px-4 flex items-center',
  };

  const variantClasses = {
    primary:
      'bg-primary text-primary-contrast border-transparent hover:bg-primaryDark',
    secondary:
      'bg-field-background text-secondary-contrast border-transparent hover:bg-gray-300',
    transparent:
      'bg-transparent text-secondary-contrast border border-border-gray hover:bg-gray-100',
  };

  return (
    <button
      type={type}
      className={`${className} rounded-[12px] h-[47px] text-white border font-medium shadow-sm transition-all duration-300 ease-in-out focus:outline-none flex items-center ${sizeClasses[size]} ${variantClasses[variant]} `}
      {...props}
    >
      {icon && (
        <span className={`w-fit mr-2 ${size === 'block' ? 'text-white' : ''}`}>
          {icon}
        </span>
      )}
      <span className="flex w-fit text-xl px-3 py-4  flex-1 justify-center text-center whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};

export default Button;
