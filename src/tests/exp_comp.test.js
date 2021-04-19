import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import Component1 from '../components/experiment_components/exp_comp1'
import Component1b from '../components/experiment_components/exp_comp1b'
import Component3 from '../components/experiment_components/exp_comp3'
import Trail from '../components/experiment_components/exp_comp4_spring'


test('test experiment comp 1', () => {
    render(<Component1 />, {wrapper:MemoryRouter});
    const linkElement = screen.getByText(/Component 1/i);
    expect(linkElement).toBeInTheDocument();
  });

test('test experiment comp 1b', () => {
    render(<Component1b />, {wrapper:MemoryRouter});
    const linkElement2 = screen.getByText(/component 1b/i);
    expect(linkElement2).toBeInTheDocument();
});

test('test experiment comp 1b in a different way', () => {
    const {asFragment} = render(<Component1b/>)
    render(<Component1b />, {wrapper:MemoryRouter});
    expect(asFragment(<Component1b/>)).toMatchSnapshot() 
});

test('test experiment comp 3', () => {
    const {asFragment} = render(<Component3/>)
    render(<Component3 />, {wrapper:MemoryRouter});
    expect(asFragment(<Component1b/>)).toMatchSnapshot() 
});

test('test experiment comp 4, Trail', () => {
    render(<Trail />, {wrapper:MemoryRouter});
    const linkElement = screen.getByText(/usetrail/i);
    expect(linkElement).toBeInTheDocument();
  });


