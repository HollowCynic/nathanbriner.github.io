import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import Landing from '../components/landingpage';
import Aboutme from '../components/aboutme'
import Schedule from '../components/schedule-functions'
import data3 from '../components/data/fall2019-schedule.json'
import Experience from '../components/experience'
import Education from '../components/education'

test('test landing page', () => {
  render(<Landing />, {wrapper:MemoryRouter});
  const linkElement = screen.getByText(/nathan/i);
  expect(linkElement).toBeInTheDocument();
});

test('test about me page', () => {
  render(<Aboutme/>, {wrapper:MemoryRouter});
  const linkElement = screen.getByText(/email/i);
  expect(linkElement).toBeInTheDocument();
});

test('test experience component', () => {
  render(<Experience jobName="Test Job"/>, {wrapper:MemoryRouter});
  const linkElement = screen.getByText(/test job/i);
  expect(linkElement).toBeInTheDocument();
});

test('test education component', () => {
  render(<Education school="Test School"/>, {wrapper:MemoryRouter});
  const linkElement = screen.getByText(/test school/i);
  expect(linkElement).toBeInTheDocument();
});

test('test schedule table', () => {
  render(<Schedule semester="test" classes={data3}/>, {wrapper:MemoryRouter});
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});


