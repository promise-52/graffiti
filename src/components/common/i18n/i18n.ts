import i18next from 'i18next';

export async function i18nInit() {
  return i18next.init({
    fallbackLng: ['ru', 'en'],
    resources: {
      ru: {
        translation: {
          /* main: */
          label: 'ЭФФЕКТГРАФФ',
          present: 'ПРЕДСТАВЛЯЕТ',
          here: 'ЗДЕСЬ',
          /* navbar */
          manifest: 'манифест',
          gallery: 'портфолио',
          form: 'заявка',
          contacts: 'контакты',
          /* gallery */
          our: 'наша',
          geography: 'география',
          moreWorks: 'больше работ',
          /* form */
          formBlock: {
            calc: 'Считаем квадратные метры ',
            and: 'и ',
            make: 'делаем ',
            qualitative: 'качественный ',
            creativity: 'креатив ',
            phone: 'Телефон',
            name: 'Имя',
            photo: 'Фото',
            sq: 'Размеры объекта, кв.м.',
            city: 'Город',
            btn: 'поехали',
          },
          meta: '** Meta признана экстремистской и запрещена в России'
        }
      },
      en: {
        translation: {
          label: 'effectgraff',
          present: 'PRESENT',
          here: 'HERE',
          /* navbar */
          manifest: 'manifest',
          gallery: 'gallery',
          form: 'form',
          contacts: 'contacts',
          /* gallery */
          our: 'our',
          geography: 'geography',
          moreWorks: 'more works',
          /* form */
          formBlock: {
            calc: 'Calculating square meters ',
            and: 'and ',
            make: 'making ',
            qualitative: 'quality ',
            creativity: 'creativity ',
            phone: 'Phone',
            name: 'Name',
            photo: 'Photo',
            sq: 'Object size, sq.m.',
            city: 'City',
            btn: `let's go`,
          },
          meta: '**Meta has been recognized as extremist and is banned in Russia.',
        }
      },
    }    
  })
}