import { IForm } from "../../Form";

  /* FORGIVE ME GOD PLS */
  /* BUT CUSTOMER HAVENT GOT ENOUGH MONEY FOR BACKEND */
const botToken = '5116825242:AAEAizcox9pMgDE0j-mQBxPHsrAVKUOarT8';
const chatId = '1009701839';

function sendMessage({name, telephone, city, square}: IForm) {
  const formData = new FormData();
  formData.append('chat_id', chatId);
  const text = `
    От: ${name} 
    Телефон: ${telephone}
    Город: ${city}
    Площадь: ${square}
  `
  formData.append('text', text);

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    body: formData
  });
}

function attachPhotos({files}: IForm) {
  const formData = new FormData();
  formData.append('chat_id', chatId);
  const media = [];
  for (let i = 0; i < (files?.length ?? 0); i++) {
    const file = files?.item(i)
    if (file) {
      media.push({
        type: 'photo',
        media: `attach://${file.name}`
      })
      formData.append(`${file.name}`, file)
    }
  }
  formData.append('media', JSON.stringify(media));
  fetch(`https://api.telegram.org/bot${botToken}/sendMediaGroup`, {
    method: 'POST',
    body: formData
  });
}

export default function mail(form: IForm) {

  const formData = new FormData();
  sendMessage(form);
  if (form.files?.length) {
    attachPhotos(form);
  }

  fetch(`https://api.telegram.org/bot${botToken}/sendMediaGroup`, {
      method: 'POST',
      body: formData
  })
  .catch(error => {
      console.error('Error:', error);
  });
}