/**
 *@see https://airbnb.io/enzyme/docs/api/
 *@see https://github.com/airbnb/enzyme
 * Complete the following tests down below.
 *
 *
 */
import ReactDOM from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';

const wrapper = shallow(<App />);
const wrapperMount = mount(<App />);

describe('Links Page', () => {
  it('renders a welcome message', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });
  it('it renders two buttons on the screen', () => {
    expect(wrapper.find('button')).to.have.length(2);
  });
  it('clicking on hide button hides the text from the viewer', () => {
    const hideButton = wrapper.find('button').at(1);
    hideButton.simulate('click');
    expect(wrapper.find('li')).to.have.lengthOf(0);
  });
  it('clicking the hide button twice unhides the links', () => {
    const hideButton = wrapperMount.find('button').at(1);
    hideButton.simulate('click');
    expect(wrapper.find('li')).to.have.lengthOf(0);
    hideButton.simulate('click');
    console.log(wrapperMount.debug());
    expect(wrapperMount.find('li')).to.have.lengthOf(2);
  });
  it('clicking on add button adds a link', () => {
    const input = wrapperMount.find('input');
    input.simulate('change', { target: { value: 'This is a Test' } });
    const addButton = wrapperMount.find('button').at(0);
    addButton.simulate('click');
    expect(wrapperMount.find('li').at(2).text()).to.equal('This is a Test');
  });
});
