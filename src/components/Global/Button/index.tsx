import Text from 'components/Global/Text';
import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const Button = (props: Props) => {
  const { children, className = '', type = 'button', ...rest } = props;

  return (
    <button
      className={`block px-4 py-2 bg-indigo-400 rounded text-white hover:bg-indigo-500 ${className}`}
      type={type}
      {...rest}
    >
      <Text content={children} />
    </button>
  );
};

export default Button;
