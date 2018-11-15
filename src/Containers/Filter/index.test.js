import React from 'react'
import Filter from '.'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

const filters = [
  { property: 'name', type: 'text', label: 'Name', width: "500px" },
  { property: 'age', type: 'number', label: 'Age', width: "200px" },
  { property: 'gender', type: 'text', label: 'Gender', width: "200px" }
]

let wrapper = null
beforeAll(() => {
  wrapper = shallow(<Filter filters={filters} />)
})

test('Filter should render correctly', () => {
  const component = renderer.create(<Filter filters={filters} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Filter should have three Inputs', () => {
  const filter = wrapper.find('Input')
  expect(filter.length).toBe(3)
})

test('Filter should have these property in Input', () => {
  const filter = wrapper.find('Input')

  for(let i =0; i < filter.length; i++) {
    const inputProps = filter.at(i).props()
    expect(inputProps.name).toBe(filters[i].property)
    expect(inputProps.type).toBe(filters[i].type)
  }
})

