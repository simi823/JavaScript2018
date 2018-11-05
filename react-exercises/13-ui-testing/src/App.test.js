/**
 *@see https://airbnb.io/enzyme/docs/api/
 *@see https://github.com/airbnb/enzyme
 * Complete the following tests down below.
 *
 *
 */
import ReactDOM from "react-dom";
import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";
import App from "./App";

const wrapper = shallow(<App />);
<<<<<<< HEAD
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
=======
const mountedWrapper = mount(<App />);

describe("Links Page", () => {
  // console.log(wrapper.debug());
  // console.log(mountedWrapper.debug());

  it("renders a welcome message", () => {
    expect(wrapper.contains(<h2>Welcome Links Center</h2>)).to.be.true;
  });
  it("it renders two buttons on the screen", () => {
    const buttons = wrapper.find("button");
    expect(buttons).to.have.lengthOf(2);
  });
  it("clicking on hide button hides the text from the viewer", () => {
    const originalLinks = mountedWrapper.find("li");
    expect(originalLinks).to.have.lengthOf(2);

    const buttons = mountedWrapper.find("button");
    const hideButton = buttons.reduce((acc, button) => {
      return button.text() === "Hide Links" ? button : acc;
    });
    hideButton.simulate("click");
    expect(mountedWrapper.find("li").isEmpty()).to.be.true;
  });
  it("clicking the hide button twice unhides the links", () => {
    const buttons = mountedWrapper.find("button");
    const hideButton = buttons.reduce((acc, button) => {
      return button.text() === "Hide Links" ? button : acc;
    });
    hideButton.simulate("click");

    const links = mountedWrapper.find("li");
    expect(links).to.have.lengthOf(2);
  });
  it("clicking on add button adds a link", () => {
    mountedWrapper.setState({ userInput: "Another link" });

    const buttons = mountedWrapper.find("button");
    const addButton = buttons.reduce((acc, button) => {
      return button.text() === "Add a Link" ? button : acc;
    });
    addButton.simulate("click");

    const links = mountedWrapper.find("li");
    expect(links).to.have.lengthOf(3);
>>>>>>> d47b24d52e14b203c1e3889d9bf3ae4c4ce10f89
  });
});
