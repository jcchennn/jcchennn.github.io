import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import App from '../App.vue'
import zhTW from '../locales/zh-TW.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  messages: {
    'zh-TW': zhTW,
  },
})

describe('App', () => {
  it('mounts and renders hero section properly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [i18n],
      },
    })
    // expect(wrapper.text()).toContain(zhTW.nav.logo)
    expect(wrapper.text()).toContain(zhTW.hero.slogan)
  })
})
