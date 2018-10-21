import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/header';
import renderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';
configure({ adapter: new Adapter() });

describe('header component', () => {

    it('header renders without crashing', () => {
        shallow(<Header />);
    });

    it('header links match snapshot', () => {
      const headerComponent = renderer.create(
        <MemoryRouter>
           <div>
            <Link to="/" />
            <Link to="/tradelist" />
            <Link to="/tradeCalculations" />
          </div>
        </MemoryRouter>
      );

      const tree = headerComponent.toJSON();
      expect(tree).toMatchSnapshot();
    })
});
