import './Contacts.scss'
import atom from '@/assets/img/atom.png'

export function Contacts() {
  const links = [
    {
      label: 'news',
      link: '',
    },
    {
      label: 'vkontakte',
      link: '',
    },
    {
      label: 'instagramm**',
      link: '',
    },
    {
      label: 'Youtube',
      link: 'Behance',
    },
  ]
  return (
    <div className='contacts-container'>
      <div className='contacts-container-cover' />
      <div className='contacts-container-header'>
        <img src={atom} />
        <p className='text-pptelegraph'>
          © 2024
        </p>
      </div>
      <div className='contacts-container-links'>
        <h1 className='text-pptelegraph'>
          effectgraff@icloud.com
        </h1>
        <div className='links-block'>
          <div className='links'>
            {
              links.map((link) => 
                <a className='text-pptelegraph'>
                  { link.label }
                </a>
              )
            }
          </div>
          <div className='blackline' />
          <p className='text-white text-pptelegraph'>
            ** Meta признана экстремистской и запрещена в России
          </p>
        </div>
      </div>
    </div>
  );
}