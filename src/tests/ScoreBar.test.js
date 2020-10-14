import React from 'react'
import { shallow, mount } from 'enzyme'
import { ScoreBar } from '../components'
import questions from '../assets/questions.json'

let scoreBarProps = {
  score: 10,
  currentQueNumber: 15,
  totalCount: questions.length
}

describe('App', () => {
  it('should render ScoreBar component', () => {
    const component = shallow(<ScoreBar {...scoreBarProps} />)
    expect(component).toMatchSnapshot()
  })

  it('should show correct score', async () => {
    const component = mount(<ScoreBar {...scoreBarProps} />)
    expect(component.find('div.currentScorePercent').text()).toEqual('Score:50%')
  })

  it('should show correct maximum score', async () => {
    const component = mount(<ScoreBar {...scoreBarProps} />)
    expect(component.find('div.maxScorePercent').text()).toEqual('Max:75%')
  })
})
