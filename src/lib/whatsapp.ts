const WHATSAPP_PHONE = '34611257828';

export const openWhatsApp = (message?: string) => {
  const encodedMessage = message ? encodeURIComponent(message) : '';
  const url = `https://wa.me/${WHATSAPP_PHONE}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
  window.open(url, '_blank');
};

export const getWhatsAppLink = (message?: string) => {
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${WHATSAPP_PHONE}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
};
