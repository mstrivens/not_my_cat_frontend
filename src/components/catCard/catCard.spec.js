import React from 'react';
import { shallow } from 'enzyme';
import Cat from './catCard.js';

describe('catCard', () => {
  const wrapper = shallow(<Cat />);

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  })

  it('should have a header with class Cat-header', () => {
    expect(wrapper.exists('.Cat-header')).toEqual(true)
  })

  it('has a title', () => {
    expect(wrapper.exists('h1')).toEqual(true)
  })

  it('has an image tag', () => {
    expect(wrapper.exists('img')).toEqual(true)
  })

  it('has an image class', () => {
    expect(wrapper.exists('.Cat-image')).toEqual(true)
  })

  it('has a name tag', () => {
    expect(wrapper.exists('h2')).toEqual(true)
  })

  it('has a table for cattributes', () => {
    expect(wrapper.exists('table')).toEqual(true)
  })

  it('has 3 rows', () => {
    expect(wrapper.find('tr').length).toEqual(3)
  })

  it('has 3 table headers', () => {
    expect(wrapper.find('th').length).toEqual(3)
  })

  it('has 3 table data entries', () => {
    expect(wrapper.find('td').length).toEqual(3)
  })
})
