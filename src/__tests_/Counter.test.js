import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./../Counter";
import { act } from "react";

describe("Counter functionality", () => {
  test("renders the counter and buttons", () => {
    act(() => {
      render(<Counter />);
    });

    // Check if the counter starts at 0
    const counterElement = screen.getByText(/0/i);
    expect(counterElement).toBeInTheDocument();

    // Check if the increment and decrement buttons are in the document
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  test("increments the counter", () => {
    act(() => {
      render(<Counter />);
    });

    screen.debug();

    const incrementButton = screen.getByText("+");
    const counterElement = screen.getByText(/0/i);

    // Simulate a click on the increment button
    fireEvent.click(incrementButton);

    // After clicking, the counter should display 1
    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });

  test("decrements the counter", () => {
    act(() => {
      render(<Counter />);
    });

    screen.debug();

    const decrementButton = screen.getByText("-");
    const incrementButton = screen.getByText("+");

    // Increment first to get the counter above 0
    fireEvent.click(incrementButton);

    // Simulate a click on the decrement button
    fireEvent.click(decrementButton);

    // After clicking, the counter should display 0
    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });
});
