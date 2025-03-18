import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddPost from '../../src/components/addPost'
import userEvent from '@testing-library/user-event';

describe('Add Post Component', () => {
    const mockProps = {
        open: true,
        onClose: vi.fn(),
        handleForm: vi.fn(),
        tagsData: ['Tag1', 'Tag2', 'Tag3'],
    };
    // Test 1
    test('renders modal when open is true', () => {
        render(<AddPost {...mockProps}/>);
        const heading = screen.getByText('Upload a Post');

        expect(heading).toBeInTheDocument();
        expect(screen.getByText('Post')).toBeInTheDocument();
    });
    // Test 2
    test('does not render the modal when open is false', () => {
        render(<AddPost {...mockProps} open={false}/>);
        expect(screen.queryByText('Upload a Post')).not.toBeInTheDocument();
    });
    // Test 3
    test('renders all provided tags as checkboxes', () => {
        render(<AddPost {...mockProps}/>);
        mockProps.tagsData.forEach(tag => {
            expect(screen.getByLabelText(tag)).toBeInTheDocument();
            expect(screen.getByRole('checkbox', {name: tag})).toBeInTheDocument();
        });
    });
    // Test 4
    it('marks the text field as required', () => {
        render(<AddPost {...mockProps} />);
        const textField = screen.getByRole('textbox', {name: /enter your post/i});
        expect(textField).toBeRequired();
    });
    // Test 5
    it("has a button with text 'Post'", () => {
        render(<AddPost {...mockProps} />);
        expect(screen.getByRole("button", { name: /Post/i })).toBeInTheDocument();
    });

    // Test 6: Handles empty tagsData gracefully
    it('renders without tags when tagsData is empty', () => {
        render(<AddPost {...mockProps} tagsData={[]} />);
        expect(screen.getByText('Upload a Post')).toBeInTheDocument();
        expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    });

    // Test 7: Submits form with text input and selected tags
    test('submits the form with text input and checkbox values', () => {
        render(<AddPost {...mockProps} />);
        const submitButton = screen.getByRole("button", { name: /Post/i });
        const textField = screen.getByRole('textbox', {name: /enter your post/i});
        const checkbox = screen.getByLabelText('Tag1');

        // simulate user input
        fireEvent.change(textField, {target: {value: 'Test Post'}});
        fireEvent.click(checkbox);
        fireEvent.click(submitButton);

        console.log('handleForm called:', mockProps.handleForm.mock.calls);
        // assertion
        expect(mockProps.handleForm).toHaveBeenCalledTimes(1);

        // Detailed check: match the event structure
        expect(mockProps.handleForm).toHaveBeenCalledWith(
            expect.objectContaining({
                preventDefault: expect.any(Function), // Synthetic event has this
                target: expect.any(HTMLFormElement), // Form element
            })
        );

        // Check form data separately (more reliable)
        const submittedEvent = mockProps.handleForm.mock.calls[0][0];
        const formData = new FormData(submittedEvent.target);
        expect(formData.get('title')).toBe('Test Post');
        expect(formData.get('Tag1')).toBe('on');
        expect(formData.get('Tag2')).toBe(null);
        expect(formData.get('Tag3')).toBe(null);
    });

    // Test 8: Button is disabled when form is invalid (e.g., empty required field)
    it('submits only when required field is filled', async () => {
        render(<AddPost {...mockProps} />);
        const user = userEvent.setup(); // Initialize user-event
        const form = screen.getByTestId('post-form');
        const textField = screen.getByRole('textbox', { name: /enter your post/i });
        const submitButton = screen.getByRole('button', { name: 'Post' });
    
        // Submit with empty field
        await user.click(submitButton); // Use userEvent instead of fireEvent
        expect(mockProps.handleForm).not.toHaveBeenCalled();
    
        // Fill the field and submit
        await user.type(textField, 'Valid Post');
        await user.click(submitButton);
        expect(mockProps.handleForm).toHaveBeenCalledTimes(1);
      });
});