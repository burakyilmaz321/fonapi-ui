import { mount } from '@vue/test-utils'
import FundDetails from '@/components/FundDetails'

describe('FundDetails', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FundDetails)
    expect(wrapper.vm).toBeTruthy()
  })
})
