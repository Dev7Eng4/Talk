import React, { useMemo } from 'react';

interface Props {
  checked: boolean;
  name?: any;
  label?: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  onToggle: (name?: any) => void;
  classMore?: string;
}

const Switch = ({
  checked,
  name = '',
  label = '',
  position = 'right',
  classMore = '',
  onToggle,
}: Props) => {
  const handleToggle = () => {
    onToggle(name);
  };

  const getWrapperClass = useMemo(() => {
    switch (position) {
      case 'top':
        return 'flex-col';
      case 'right':
        return 'flex-row-reverse justify-end items-center';
      case 'bottom':
        return 'flex-col-reverse';
      case 'left':
        return 'items-center';
      default:
        return '';
    }
  }, []);

  const getLabelClass = useMemo(() => {
    switch (position) {
      case 'right':
        return 'ml-2 mt-0.5';
      case 'bottom':
        return 'mt-0.5';
      case 'left':
        return 'mr-2 mt-0.5';
      default:
        return '';
    }
  }, []);

  return (
    <div className={`flex ${getWrapperClass} ${classMore}`}>
      {label && (
        <span className={`${getLabelClass} text-slate-200`}>{label}</span>
      )}
      <span
        className={`inline-block w-9 p-0.5 rounded-xl cursor-pointer ${
          checked ? 'bg-emerald-400' : 'bg-gray-400'
        }`}
        onClick={handleToggle}
      >
        <span
          className={`relative block w-4 h-4 rounded-full bg-white transition-all ${
            checked ? 'left-2/4' : 'left-0'
          }`}
        >
          <span
            className={`absolute -translate-x-2/4 -translate-y-2/4 block w-2.5 h-0.5 ${
              checked
                ? 'top-2 left-2.5 -rotate-45 bg-emerald-400'
                : 'top-2/4 left-2/4 rotate-45 bg-gray-400'
            }`}
          ></span>
          <span
            className={`absolute -translate-x-2/4 -translate-y-2/4 block h-0.5 ${
              checked
                ? 'w-1.5 ml-px top-2.5 left-1 rotate-45 bg-emerald-400'
                : 'w-2.5 top-2/4 left-2/4 -rotate-45 bg-gray-400'
            }`}
          ></span>
        </span>
      </span>
    </div>
  );
};

export default Switch;
