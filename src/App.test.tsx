import React from 'react';
import Enzyme, { shallow, ShallowWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { RootStore } from './Store/RootStore';

Enzyme.configure({ adapter: new Adapter() });

describe('App Test', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    // @ts-ignore
    wrapper = shallow(<App.wrappedComponent rootStore={new RootStore()}/>);
  });

  describe('ao renderizar', () => {
    it('deve inicializar possuir conteudo de span igual a \'My Number: 0\' ', () => {
      expect(wrapper.find('span').text()).toEqual('My Number: 0');
    });
  });

  describe('ao clicar no botão', () => {
    it('deve alterar o conteudo do span para \'My Number: 1\'', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.find('span').text()).toEqual('My Number: 1');
    });
  });
});
