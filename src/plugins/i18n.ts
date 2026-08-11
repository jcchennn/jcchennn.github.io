import { createI18n } from 'vue-i18n'

import zhTW from '../locales/zh-TW.json'
import enUS from '../locales/en-US.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'en-US',
  messages: {
    'zh-TW': zhTW,
    'en-US': enUS,
  },
  missing: (locale, key, vm) => {
    // Return a custom message or handle the missing translation
    // return `Missing translation for ${key}`
    if (key.startsWith('quotation_table_')) {
      return key.replace('quotation_table_', '').replace('_', ' ')
    } else {
      return key
    }
  },
})

export default i18n
