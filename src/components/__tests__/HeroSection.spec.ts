import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import HeroSection from '../HeroSection.vue'
import ProfileCard from '../ProfileCard.vue'
import zhTW from '../../locales/zh-TW.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  messages: {
    'zh-TW': zhTW,
  },
})

describe('HeroSection.vue', () => {
  it('renders status badge, slogan, and bio correctly via i18n', () => {
    const wrapper = mount(HeroSection, {
      global: {
        plugins: [i18n],
      },
    })

    expect(wrapper.text()).toContain(zhTW.hero.slogan)
    expect(wrapper.text()).toContain(zhTW.hero.name)
    expect(wrapper.text()).toContain(zhTW.hero.title)
    // expect(wrapper.text()).toContain(zhTW.hero.status)
  })

  // it('renders action buttons (Resume PDF and Contact Me)', () => {
  //   const wrapper = mount(HeroSection, {
  //     global: {
  //       plugins: [i18n],
  //     },
  //   })

  //   const buttons = wrapper.findAll('button')
  //   const buttonTexts = buttons.map((btn) => btn.text())

  //   expect(buttonTexts.some((text) => text.includes(zhTW.hero.downloadResume))).toBe(true)
  //   expect(buttonTexts.some((text) => text.includes(zhTW.hero.contactMe))).toBe(true)
  // })

  it('renders social links with appropriate href and aria-label', () => {
    const wrapper = mount(HeroSection, {
      global: {
        plugins: [i18n],
      },
    })

    const socialLinks = wrapper.findAll('a[target="_blank"]')
    expect(socialLinks.length).toBeGreaterThanOrEqual(3)

    const hrefs = socialLinks.map((a) => a.attributes('href'))
    expect(hrefs.some((href) => href?.includes('github.com'))).toBe(true)
    expect(hrefs.some((href) => href?.includes('linkedin.com'))).toBe(true)
    expect(hrefs.some((href) => href?.includes('mailto:'))).toBe(true)
  })

  // it('triggers window.open when resume download button is clicked', async () => {
  //   const windowSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
  //   const wrapper = mount(HeroSection, {
  //     global: {
  //       plugins: [i18n],
  //     },
  //   })

  //   const resumeBtn = wrapper
  //     .findAll('button')
  //     .find((btn) => btn.text().includes(zhTW.hero.downloadResume))
  //   expect(resumeBtn).toBeDefined()
  //   await resumeBtn?.trigger('click')

  //   expect(windowSpy).toHaveBeenCalledWith('#resume', '_blank')
  //   windowSpy.mockRestore()
  // })

  it('renders embedded ProfileCard component in the right column', () => {
    const wrapper = mount(HeroSection, {
      global: {
        plugins: [i18n],
      },
    })

    const profileCard = wrapper.findComponent(ProfileCard)
    expect(profileCard.exists()).toBe(true)
    expect(profileCard.text()).toContain('DeveloperProfile.ts')
  })
})
