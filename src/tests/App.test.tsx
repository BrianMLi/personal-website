import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Brian Marco Li/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders about', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', {name: /About Me/i});
  expect(linkElement).toBeInTheDocument();
});

test('renders paragraph', () => {
  render(<App />);
  const linkElement = screen.getByText( /I graduated from the Sauder School/i);
  expect(linkElement).toBeInTheDocument();
})

test('renders links', () => {
  render(<App />);
  const linkedinIcon = screen.getByRole('link', {name: 'linkedin-icon'})
  const githubIcon = screen.getByRole('link', {name: 'github-icon'})
  const emailIcon = screen.getByRole('link', {name: 'email-icon'})
  expect(linkedinIcon).toBeInTheDocument();
  expect(githubIcon).toBeInTheDocument();
  expect(emailIcon).toBeInTheDocument();
});
