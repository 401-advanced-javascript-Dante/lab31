/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow , mount} from 'enzyme';
import Enzyme from 'enzyme';

import renderer from 'react-test-renderer';
import Form from '../../../components/form/form.js';


describe('<Form />', () => {

  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);


  it('already exist in our app' , () => {
    let test = shallow(<Form/>);
    expect(test.find('button').exists()).toBeTruthy();
  });

  // it('Assert state changes properly', () => {
  //   let test = mount(<Form/>);
  //   console.log('**********', test);
  //   let addButton= test.find('#sub');
  //   addButton.simulate('click');
  //   expect(setState).toHaveBeenCalled(0);
  // });

  // it('Assert that state is being transferred to the DOM', () => {
  //   let test = mount(<Form/>);
  //   let button= test.find('#post');
  //   button.simulate('click');
  //   expect(test.find('p').text()).toBe('Selected REST: post');
  // });

  it('Assert DOM stability via snapshot', ()=> {
    let test = renderer.create(<Form />);
    expect(test).toMatchSnapshot();
  });



});