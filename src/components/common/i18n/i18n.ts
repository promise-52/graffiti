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
          /* manifest */
          manifestBlock: {
            about: `— это привет из чили. Мы команда художников по росписи стен. За 20 лет наши арт-объекты распространились на весь мир и всю Россию. Вот побывали в чили, привезли для вас оригинальное приветствие. Мы выступали в качестве участников и организаторов большого количества фестивалей современного искусства. 
            Стиль, смыслы, цвета и формы  вот, что позволяет нам создавать оригинальные работы. Культура Санкт-Петербурга, характер Сибири и изящность Дальнего Востока, - всё это Эффект Графф.`,
            we: 'мы',
          },
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
          meta: '** Meta признана экстремистской и запрещена в России',
          /* MOMENTS */
          moments: {
            header: {
              1: 'Рисуем и поём,',
              2: 'наслаждаемся',
              3: 'жизнью',
            },
            first: {
              1: 'we take grant',
              2: 'Creating our first mural',
            },
            second: {
              1: 'Taking a team trip',
              2: 'we',
              3: 'collaboration'
            }
          }
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
          /* manifest */
          manifestBlock: {
            we: 'we',
            about: `This is a greeting from Chile. We are a team of mural artists. Over the past 20 years, our art objects have spread all over the world and throughout Russia. We visited Chile and brought you this original greeting. We have participated in and organized numerous contemporary art festivals. Style, meanings, colors, and shapes are what allow us to create original works. The culture of Saint Petersburg, the character of Siberia, and the elegance of the Far East—all of this is the Effectgraff.`,
          },
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