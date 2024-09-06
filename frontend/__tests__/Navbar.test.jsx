import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

// Mock react-icons
jest.mock('react-icons/fa', () => ({
  FaSun: () => <div data-testid="sun-icon" />,
  FaMoon: () => <div data-testid="moon-icon" />,
}));

describe('Navbar Component', () => {
  const mockHandleThemeToggle = jest.fn();

  it('renders correctly in light mode', () => {
    render(<Navbar isDarkMode={false} handleThemeToggle={mockHandleThemeToggle} />);
    
    expect(screen.getByText('blockhouse.app')).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  });

  it('renders correctly in dark mode', () => {
    render(<Navbar isDarkMode={true} handleThemeToggle={mockHandleThemeToggle} />);
    
    expect(screen.getByText('blockhouse.app')).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  });

  it('calls handleThemeToggle when the theme button is clicked', () => {
    render(<Navbar isDarkMode={false} handleThemeToggle={mockHandleThemeToggle} />);
    
    const themeButton = screen.getByText('Dark');
    fireEvent.click(themeButton);
    
    expect(mockHandleThemeToggle).toHaveBeenCalledTimes(1);
  });

  it('applies correct styles in light mode', () => {
    render(<Navbar isDarkMode={false} handleThemeToggle={mockHandleThemeToggle} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('bg-white');
    expect(nav).toHaveClass('border-gray-200');
    
    const link = screen.getByText('blockhouse.app');
    expect(link).toHaveClass('text-gray-900');
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-300');
    expect(button).toHaveClass('text-gray-900');
  });

  it('applies correct styles in dark mode', () => {
    render(<Navbar isDarkMode={true} handleThemeToggle={mockHandleThemeToggle} />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('bg-gray-900');
    expect(nav).toHaveClass('border-gray-700');
    
    const link = screen.getByText('blockhouse.app');
    expect(link).toHaveClass('text-white');
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-700');
    expect(button).toHaveClass('text-white');
  });
});