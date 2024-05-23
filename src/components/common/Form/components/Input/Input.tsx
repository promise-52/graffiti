import { ChangeEvent } from 'react';
import './Input.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface InputProps {
  type: string;
  placeholder: string;
  value?: string | string[];
  onChange: (value: string | string[] | FileList | null) => void;

  style?: { [key: string]: string }
  icon?: IconDefinition
}

export default function Input ({ icon, style, value, onChange, placeholder, type }: InputProps) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(
      type === 'file' ? event.target.files : event.target.value
    );
  };
  
  return (
    <>
    <div className='input' style={style}>
      {
        type === 'file'
        ? <label className='text-pptelegraph'>
            {placeholder}
            <input
              type={type}
              onChange={handleChange}
              multiple
            />
            { icon ? <FontAwesomeIcon className='input-icon' icon={icon} /> : <></> }
          </label> 
        : <input
            className='text-pptelegraph'
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={handleChange}
          />
      }
    </div>
    </>
  )
}