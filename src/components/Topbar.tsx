import React from 'react';

type TopbarProps = {
  leftIcon?: React.ReactNode;
  title?: string;
  rightIcon?: React.ReactNode;
};

const Topbar = ({ leftIcon, title, rightIcon }: TopbarProps) => {
  return (
    <div className="flex items-center justify-between h-12 px-4 bg-white shadow-sm">
      {/* Left Icon Section */}
      <div className="w-12 flex justify-start">
        {leftIcon ? <div>{leftIcon}</div> : <div></div>}
      </div>

      <div className="flex-1 flex justify-center">
        {title && <h1 className="text-lg font-semibold">{title}</h1>}
      </div>

      <div className="w-12 flex justify-end">
        {rightIcon ? <div>{rightIcon}</div> : <div></div>}
      </div>
    </div>
  );
};

export default Topbar;
