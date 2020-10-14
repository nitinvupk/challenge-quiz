import React from 'react'
import { shallow } from 'enzyme'
import { Question } from '../components'

describe('App', () => {
  it('should render Question component', () => {
    const component = shallow(<Question debug />)
    expect(component).toMatchSnapshot()
  })
})
