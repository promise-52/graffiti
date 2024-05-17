import { ChangeEvent } from 'react';
import './Input.scss'

interface InputProps {
  type: string;
  placeholder: string;
  value?: string | number;
  onChange: (value: string | number) => void;

  style?: { [key: string]: string }
}

export default function Input ({ style, value, onChange, placeholder, type }: InputProps) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  
  return (
    <>
    <div className='input' style={style}>
      <input
        className='text-pptelegraph input-component'
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
    </>
  )
}