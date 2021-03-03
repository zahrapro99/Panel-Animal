// import polyglotI18nProvider from 'ra-i18n-polyglot';

// const englishMessages = {
//     ra: {
//         notification: {
//             http_error: 'Network error. Please retry',
//         },
//         action: {
//             save: 'Save',
//             delete: 'Delete',
//         },
//     },
// };
// const frenchMessages = {
//     ra: {
//         notification: {
//             http_error: 'Erreur réseau, veuillez réessayer',
//         },
//         action: {
//             save: 'Enregistrer',
//             delete: 'Supprimer',
//         },
//     },
// };

// export const i18nProvider = polyglotI18nProvider(locale =>
//     locale === 'fr' ? frenchMessages : englishMessages,
//     'en' // Default locale
// );

import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "./i18n/en";

const messages = {
  fa: () => import("./i18n/fa.js").then((messages) => messages.default),
};

export default polyglotI18nProvider((locale) => {
  if (locale === "fa") {
    return messages[locale]();
  }

  return englishMessages;
}, "en");
