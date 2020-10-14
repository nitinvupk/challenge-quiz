import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('App', () => {
  it('should render app component', () => {
    const wrapper = shallow(<App debug />)
    expect(wrapper).toMatchSnapshot()
  })
})
