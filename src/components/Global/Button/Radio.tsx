import React from 'react';
import Text from '../Text';

interface Props {
  selected: string;
  options: {
    label: string;
    value: string;
  }[];
  onChangeSelected: React.Dispatch<React.SetStateAction<string>>;
  classMore?: string;
}

const Radio = ({
  selected,
  options,
  classMore = '',
  onChangeSelected,
}: Props) => {
  return (
    <div className='flex flex-col items-start'>
      {options.map((option) => (
        <div
          className='inline-flex items-center my-1.5 cursor-pointer'
          key={option.value}
          onClick={() => onChangeSelected(option.value)}
        >
          <span
            className={`inline-flex p-0.5 items-center justify-center rounded-full border-2 border-solid ${
              option.value === selected ? 'border-white' : 'border-gray-300'
            }`}
          >
            <span
              className={`inline-block w-3 h-3 rounded-full ${
                option.value === selected ? 'bg-emerald-400' : ''
              }`}
            ></span>
          </span>
          <span className='ml-2 text-gray-300'>
            <Text content={option.label} />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Radio;
