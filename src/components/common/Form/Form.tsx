import { useState } from 'react';
import './Form.scss'
import Input from './components/Input/Input'
import Agreement from './components/Agreement/Agreement';
import ConfirmButton from './components/ConfirmButton/ConfirmButton';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import mail from './components/Mailer/Mailer.ts';
import { Ballon } from '../Ballon/Ballon.tsx';

export interface IForm {
  telephone?: string
  name?: string
  square?: string
  city?: string
  files?: FileList
  agreement?: boolean
}

export default function Form() {
  const [formValue, setformValue] = useState<IForm>({
    telephone: '',
    name: '',
    square: '',
    city: '',
    agreement: false
  });

  const handleInputChange = (
    value: string | boolean | string[] | FileList | null,
    key: string
  ) => {
    setformValue({ ...formValue, [key]: value });
  };

  const confirmForm = () => {
    mail(formValue)
  }

  return (
    <div className="form-container">
      <div className="gallery-title text-heathergreen">
        заявка
      </div>
      <Ballon />
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
              type='tel'
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
              type='file'
              onChange={(value) => handleInputChange(value, 'files')}
              icon={faPaperclip}
            />
            <Input
              placeholder='Размеры объекта, кв.м.'
              type='number'
              value={formValue.square}
              onChange={(value) => handleInputChange(value, 'square')}
            />
          </div>
          <div className='form-input-line'>
            <Input
              placeholder='Город'
              type='text'
              value={formValue.city}
              onChange={(value) => handleInputChange(value, 'city')}
            />
          </div>
          <Agreement
            checked={formValue.agreement ?? false}
            onCheckboxChange={(value) => handleInputChange(value, 'agreement')}
          />
          <ConfirmButton
            label='¡поехали!'
            onClick={confirmForm}
            disabled={!formValue.agreement}
          />
        </div>
      </div>
    </div>
  )
}