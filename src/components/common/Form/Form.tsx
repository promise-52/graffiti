import { useEffect, useState } from 'react';
import './Form.scss'
import Input from './components/Input/Input'
import Agreement from './components/Agreement/Agreement';
import ConfirmButton from './components/ConfirmButton/ConfirmButton';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import mail from './components/Mailer/Mailer.ts';
import { Ballon } from '../Ballon/Ballon.tsx';
import i18next from 'i18next';

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
        { i18next.t('form') }
      </div>
      <Ballon />
      <div className='form text-pptelegraph'>
        <div className='form-header-container'>
          <span className='form-header text-underline'>
            { i18next.t('formBlock.calc') }
          </span>
          <span className='form-header text-underline last'>
            { i18next.t('formBlock.and') } 
            <b>{ i18next.t('formBlock.make') }</b> 
            { i18next.t('formBlock.qualitative') } 
            <b>{ i18next.t('formBlock.creativity') }</b>
          </span>
        </div>
        <div className='form-input-container'>
          <div className='form-input-line'>
            <Input
              style={{ width: '58%' }}
              placeholder={i18next.t('formBlock.phone')}
              type='tel'
              value={formValue.telephone}
              onChange={(value) => handleInputChange(value, 'telephone')}
            />
            <Input
              placeholder={i18next.t('formBlock.name')}
              type='text'
              value={formValue.name}
              onChange={(value) => handleInputChange(value, 'name')}
            />
          </div>
          <div className='form-input-line'>
            <Input
              style={{ width: '58%' }}
              placeholder={i18next.t('formBlock.photo')}
              type='file'
              onChange={(value) => handleInputChange(value, 'files')}
              icon={faPaperclip}
            />
            <Input
              placeholder={i18next.t('formBlock.sq')}
              type='number'
              value={formValue.square}
              onChange={(value) => handleInputChange(value, 'square')}
            />
          </div>
          <div className='form-input-line'>
            <Input
              placeholder={i18next.t('formBlock.city')}
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
            label={`¡${i18next.t('formBlock.btn')}!`}
            onClick={confirmForm}
            disabled={!formValue.agreement}
          />
        </div>
      </div>
    </div>
  )
}