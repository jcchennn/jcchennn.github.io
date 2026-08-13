import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileCard from '../ProfileCard.vue'

describe('ProfileCard.vue', () => {
  it('renders default profile card content properly', () => {
    const wrapper = mount(ProfileCard)

    expect(wrapper.text()).toContain('DeveloperProfile.ts')
    expect(wrapper.text()).toBeTypeOf('string')
    expect(wrapper.text()).toContain('Frontend')
    expect(wrapper.text()).toContain('Vue 3 Composition API')
    expect(wrapper.text()).toContain('Strict Mode')
  })

  it('renders custom props correctly when passed', () => {
    const wrapper = mount(ProfileCard, {
      props: {
        fileName: 'CustomProfile.ts',
        developerName: 'Alice Dev',
        role: 'Full Stack Engineer',
        status: 'Coding high performance apps ⚡',
      },
    })

    expect(wrapper.text()).toContain('CustomProfile.ts')
    expect(wrapper.text()).toContain('Alice Dev')
    expect(wrapper.text()).toContain('Full Stack Engineer')
    expect(wrapper.text()).toContain('Coding high performance apps ⚡')
  })
})
