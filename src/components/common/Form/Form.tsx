import { useState } from 'react';
import './Form.scss'
import Input from './components/Input/Input'
import Agreement from './components/Agreement/Agreement';
import ConfirmButton from './components/ConfirmButton/ConfirmButton';

interface IFrom {
  telephone?: number
  name?: string
  agreement?: boolean
}

export default function Form() {
  const [formValue, setformValue] = useState<IFrom>({});

  const handleInputChange = (value: string | number | boolean, key: string) => {
    setformValue({ ...formValue, [key]: value });
  };

  const confirmForm = () => {

  }

  return (
    <>
    <div className="gallery-title text-heathergreen">
      заявка
    </div>
    <div className='form text-pptelegraph'>
      <div className='form-header-container'>
        <span className='form-header text-underline'>
          Считаем квадратные метры
        </span>
        <span className='form-header text-underline last'>
          и <b>делаем</b> качественный <b>креатив</b>
        </span>
      </div>
      <div className='form-input-container'>
        <div className='form-input-line'>
          <Input
            style={{ width: '58%' }}
            placeholder='Телефон'
            type='text'
            value={formValue.telephone}
            onChange={(value) => handleInputChange(value, 'telephone')}
          />
          <Input
            placeholder='Имя'
            type='text'
            value={formValue.name}
            onChange={(value) => handleInputChange(value, 'name')}
          />
        </div>
        <div className='form-input-line'>
          <Input
            style={{ width: '58%' }}
            placeholder='Фото'
            type='text'
            value={formValue.telephone}
            onChange={(value) => handleInputChange(value, 'telephone')}
          />
          <Input
            placeholder='Размеры объекта, кв.м.'
            type='text'
            value={formValue.name}
            onChange={(value) => handleInputChange(value, 'name')}
          />
        </div>
        <div className='form-input-line'>
          <Input
            placeholder='Город'
            type='text'
            value={formValue.name}
            onChange={(value) => handleInputChange(value, 'name')}
          />
        </div>
        <Agreement
          checked={formValue.agreement ?? false}
          onCheckboxChange={(value) => handleInputChange(value, 'agreement')}
        />
        <ConfirmButton
          label='¡поехали!'
          onClick={confirmForm}
        />
      </div>
    </div>
    </>
  )
}