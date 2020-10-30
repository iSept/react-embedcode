import React from 'react'
import { Embed, useEmbed } from '.'
import Enzyme, { mount } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const HookText = ({ callback }) => {
  callback()
  return null
};

describe('Embed', () => {
  it('is truthy', () => {
    expect(Embed).toBeTruthy()
  })

  it('renders without crashing', () => {
    const wrapper = mount(<Embed />)
    expect(wrapper.find(Embed).length).toBe(1)
  })
  
  it('renders a child mount', () => {
    const mountElem = <div />
    const wrapper = mount(<Embed mount={mountElem} script={null} />)
    expect(wrapper.find('div').length).toBe(1)
  })
  
  it('hook runs without crashing', () => {
    let status = ''
    mount(
      <HookText
        callback={() => {
          status = useEmbed('https://google.com')
        }}
      />
    )
    expect(status[0]).toBe('loading')
  })
})
