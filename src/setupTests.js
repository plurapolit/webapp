// setup for react testing library: https://testing-library.com/docs/react-testing-library/intro
import '@testing-library/jest-dom/extend-expect';

// setup for enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
