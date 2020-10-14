import React from 'react'
import { shallow } from 'enzyme'
import { Question } from '../components'
import allQuestions from '../assets/questions.json'

let question = allQuestions[0]
question['options'] = [...question.incorrect_answers, question.correct_answer]
describe('App', () => {
  it('should render Question component', () => {
    const component = shallow(<Question {...question} />)
    expect(component).toMatchSnapshot()
  })

  it('should render title in p tag', () => {
    const component = shallow(<Question {...question} />)
    expect(component.find('p').text()).toEqual(decodeURIComponent(question.question))
  })

  it('should click button and answer should be wrong', () => {
    const component = shallow(<Question {...question} />)
    component
      .find('button')
      .at(0)
      .simulate('click')
    expect(component.find('h1').text()).toEqual('Sorry!')
  })

  it('should click button and answer should be corect', () => {
    const component = shallow(<Question {...question} />)
    component
      .find('button')
      .at(3)
      .simulate('click')
    expect(component.find('h1').text()).toEqual('Correct!')
  })
})
