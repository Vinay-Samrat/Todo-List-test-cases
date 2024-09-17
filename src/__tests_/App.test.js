import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { act } from 'react';


describe('Todo functionality', () => {
  test('renders existing todo items', () => {
    act(() => {
      render(<App />);
    });
    
    screen.debug();

    // Check if the todos are displayed on the screen
    const todo1 = screen.getByText(/The list of oceans/i);
    const todo2 = screen.getByText(/The list of Dogs/i);
    const todo3 = screen.getByText(/The list of cats/i);
    
    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
    expect(todo3).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    act(() => {
      render(<App />);
    });

     screen.debug();

    // Find the input field and the add button
    const inputElement = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add Todo/i);
    
    // Simulate typing a new todo and clicking the add button
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    // Check if the new todo is displayed
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test('deletes a todo item', () => {
    act(() => {
      render(<App />);
    });

    screen.debug();
    
    // Find the delete button for the first todo item
    const deleteButton = screen.getAllByText('x')[0];
    
    // Simulate a click on the delete button
    fireEvent.click(deleteButton);
    
    // The todo item should no longer be in the document
    const deletedTodo = screen.queryByText(/The list of oceans/i);
    expect(deletedTodo).not.toBeInTheDocument();
  });
});
