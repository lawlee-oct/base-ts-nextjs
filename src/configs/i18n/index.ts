import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { vi } from './vi';
import { LANGUAGE } from '@/src/constants/config';

i18n
  .use(initReactI18next)
  .init({
    returnNull: false,
    fallbackLng: LANGUAGE.EN,
    debug: false,
    lng: LANGUAGE.VI,
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .catch(error => {
    throw error;
  });

const I18n = i18n;
// const t = (...args: Parameters<TFunction>) => I18n.t(...args);

export { I18n };
