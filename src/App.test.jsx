/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './testHelper';
import UserProgrammingLanguage from './components/UserProgrammingLanguage/UserProgrammingLanguage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the favourite language main component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(UserProgrammingLanguage)).toHaveLength(1);
});
