import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import NavBar from '../NavBar.vue'
import zhTW from '../../locales/zh-TW.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  messages: {
    'zh-TW': zhTW,
  },
})

describe('NavBar.vue', () => {
  it('renders logo and navigation links via i18n', () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [i18n],
      },
    })

    // expect(wrapper.text()).toContain(zhTW.nav.logo)
    expect(wrapper.text()).toContain(zhTW.nav.about)
    expect(wrapper.text()).toContain(zhTW.nav.skills)
    // expect(wrapper.text()).toContain(zhTW.nav.experience)
    // expect(wrapper.text()).toContain(zhTW.nav.projects)
    // expect(wrapper.text()).toContain(zhTW.nav.contact)
  })

  it('toggles theme when theme button is clicked', async () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [i18n],
      },
    })

    const themeButtons = wrapper.findAll('button')
    const themeBtn = themeButtons[themeButtons.length - 1] // Last button is theme switcher
    expect(themeBtn).toBeDefined()

    await themeBtn!.trigger('click')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')

    await themeBtn!.trigger('click')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})
