import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import './testHelper';
import UserProgrammingLanguage from './components/UserProgrammingLanguage/UserProgrammingLanguage';

it('renders the favourite language main component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(UserProgrammingLanguage)).toHaveLength(1);
});
