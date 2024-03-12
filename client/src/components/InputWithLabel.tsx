import React, { ChangeEvent } from 'react';

interface InputWithLabelProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  type,
  placeholder,
  value,
  setValue,
}: InputWithLabelProps) => {
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={label} className='font-medium'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className='p-3 w-96 border border-slate-300 rounded-lg'
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default InputWithLabel;
