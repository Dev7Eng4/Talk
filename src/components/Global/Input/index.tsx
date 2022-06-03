import React from 'react';
import { FieldError } from 'react-hook-form';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: React.ReactNode;
  error?: React.ReactNode;
  wrapClass?: string;
}

const Input = (props: Props) => {
  const { label, error, wrapClass = '', className = '', ...rest } = props;

  return (
    <div className={wrapClass}>
      {label && (
        <span className='inline-block pb-1 text-gray-300'>{label}</span>
      )}
      <input
        className={`block w-full p-2 rounded focus:outline-none ${className}`}
        {...rest}
      />
      {error && <span className='text-xs text-red-400'>{error}</span>}
    </div>
  );
};

export default Input;
