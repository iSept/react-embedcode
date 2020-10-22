import React from 'react'
import { Embed } from '.'
import Enzyme, { mount } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Embed', () => {
  it('is truthy', () => {
    expect(Embed).toBeTruthy()
  })

  it('renders without crashing', () => {
    const wrapper = mount(<Embed />)
    expect(wrapper.find(Embed).length).toBe(1)
  })
})