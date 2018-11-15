import React from 'react'
import FormInput from '.'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

let wrapper = null
beforeAll(() => {
  wrapper = shallow(
    <FormInput 
      label="Name"
      type="text"
      value="132"
      onChange={() => null}
    />
  )
})

test('should render correctly', () => {
  const component = renderer.create(
    <FormInput 
      label="Name"
      type="text"
      value="132"
      onChange={() => null}
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('should have a label', () => {
  const label = wrapper.find('label')
  expect(label).toHaveLength(1)
  expect(label.contains('Name')).toBeTruthy()
})

test('should have a Input', () => {
  const input = wrapper.find('Input')
  expect(input).toHaveLength(1)
  expect(input.prop('type')).toBe('text')
  expect(input.prop('value')).toBe('132')
})

test('should have a InputNumber if type is number', () => {
  const wrapperFormInput = shallow(
    <FormInput 
      label="Name"
      type="number"
      value="132"
      onChange={() => null}
    />
  )

  const inputNumber = wrapperFormInput.find('InputNumber')
  expect(inputNumber).toHaveLength(1)
  expect(inputNumber.prop('value')).toBe('132')
})